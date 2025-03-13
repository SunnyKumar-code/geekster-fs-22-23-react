const express = require("express");

const productController = require("../controllers/product.controller");
const roleMiddleware = require("../middlewares/roleMiddleware");
const catchAsync = require("../service/catchAsync");

const router = express.Router();

router.post(
  "/create",
  roleMiddleware("SELLER", "ADMIN", "SUPER_ADMIN"),
  catchAsync(productController.productCreate)
);

router.get("/list", catchAsync(productController.productList));

router.get("/:id", catchAsync(productController.productDetail));

router.post(
  "/add-review",
  roleMiddleware("CUSTOMER"),
  catchAsync(productController.productReview)
);

module.exports = router;
