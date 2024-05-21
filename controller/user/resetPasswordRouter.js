const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// SMTP configuration with your Mailtrap credentials
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '0317456b5ec109',
        pass: 'bae0576c59e177'
    }
});

router.post('/reset-password', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Email options
    const mailOptions = {
        from: '"LocalOrgano" <noreply@localorgano.com>',
        to: email,
        subject: 'Password Reset Instructions',
        html: `<p>Hello,<br/>Please click on the following link to reset your password: <a href="${process.env.FRONTEND_URL}/reset-password">Reset Password</a></p>`
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            return res.status(200).json({ success: true, message: 'Reset password instructions have been sent to your email.' });
        }
    });
});

module.exports = router;
