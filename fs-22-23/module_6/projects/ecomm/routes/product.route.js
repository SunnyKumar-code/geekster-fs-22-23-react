const express = require("express");

const productController = require("../controllers/product.controller");

const router = express.Router();

router.post("/create", productController.productCreate);

router.get("/list", productController.productList);

router.get("/:id", productController.productDetail);

module.exports = router;