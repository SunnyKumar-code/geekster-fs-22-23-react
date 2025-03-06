const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");
const couponRoutes = require("./routes/coupon.route");

const app = express();

dotenv.config();

const portNo = process.env.PORT_NO;
const DB_URI = process.env.DB_URI;


// Global middlewares
app.use(express.json());

// Modular routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/coupon", couponRoutes);

mongoose
    .connect(DB_URI)
    .then(() => console.log(`DB Connected successfully`))
    .catch(err => console.error("ERROR WHILE CONNECTING DATABASE", err));

app.listen(portNo, () => console.log(`eComm services are up and running at port ${portNo}`));