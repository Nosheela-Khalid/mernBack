// controllers/order/allOrders.js
const Order = require('../../models/orderModel'); // Ensure this path is correct

async function allOrders(req, res) {
    try {
        const orders = await Order.find().populate('user', 'email').populate('orderItems.product', 'name'); // Populate product details if needed
        console.log(orders); 
        res.json({
            message: "All orders fetched successfully",
            data: orders,
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || "An error occurred",
            success: false,
            error: true
        });
    }
}

module.exports = allOrders;
