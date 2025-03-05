const mongoose = require("mongoose");

const ProductModel = require("./product.model");

const product = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "products"
    },
    qty: {
        type: Number,
        required: true,
        default: 1
    }
});

const cartSchema = new mongoose.Schema({
    products: {
        type: [product],
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    }
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;