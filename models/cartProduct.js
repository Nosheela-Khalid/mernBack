const mongoose = require('mongoose')

const addToCart = mongoose.Schema({
   productId : {
        ref : 'product',
        type : String,
   },
   quantity : Number,
   userId : String,
   customOrderText: { // Add this field to store custom order details
    type: String,
    default: ''
}
},{
    timestamps : true
})


const addToCartModel = mongoose.model("addToCart",addToCart)

module.exports = addToCartModel