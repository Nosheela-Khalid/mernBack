const express = require('express');
const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUsers');
const deleteUser = require('../controller/user/deleteUser');
const updateUser = require('../controller/user/updateUser');
const UploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const updateProductController = require('../controller/product/updateProduct');
const deleteProduct = require('../controller/product/deleteProduct');
const getCategoryProduct = require('../controller/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProductController = require('../controller/product/filterProduct');
const { createOrder } = require('../controller/order/orderController');
const allOrders = require('../controller/order/allOrders');
const { addReview, getProductReviews } = require('../controller/product/reviewController');
const { clearCart } = require('../controller/product/cartController'); // Ensure the path is correct
const  deleteOrder  = require('../controller/order/deleteOrder'); // Ensure this path is correct
const  updateOrder = require('../controller/order/updateOrder'); 
const  getUserOrders  = require('../controller/order/getUserOrders');
const getUserCount = require('../controller/user/getUserCount');
const getProductCount = require('../controller/product/getProductCount');
const getOutOfStockProductCount = require('../controller/product/getOutOfStockProductCount');

// User routes
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

// Admin panel routes
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.delete('/delete-user/:id', authToken, deleteUser);

// Product routes
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);
router.delete('/delete-product/:id', authToken, deleteProduct);

// Review routes
router.post('/add-review', authToken, addReview);
router.get('/get-Reviews/:productId', getProductReviews);
// User cart routes
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);
router.post('/clearCart', authToken, clearCart);

// Order routes
router.post('/create-order', authToken, createOrder);
router.get('/all-orders', authToken, allOrders);
router.delete('/delete-order/:orderId', authToken, deleteOrder);
router.post('/update-order', authToken, updateOrder);
router.get('/user-orders', authToken, getUserOrders);




// Dashboard routes
router.get('/dashboard/users/count', authToken, getUserCount);
router.get('/dashboard/products/count', authToken, getProductCount);
router.get('/dashboard/products/out-of-stock/count', authToken, getOutOfStockProductCount);

module.exports = router;
