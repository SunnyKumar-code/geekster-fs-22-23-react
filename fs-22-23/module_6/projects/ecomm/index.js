const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require("cors");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");
const couponRoutes = require("./routes/coupon.route");
const orderRoutes = require("./routes/order.route");

const authMiddleware = require("./middlewares/authMiddleware");

const app = express();

dotenv.config();

const portNo = process.env.PORT_NO;
const DB_URI = process.env.DB_URI;

const corsOptions = {
    origin: process.env.ALLOWED_ORIGIN
};


// Global middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Modular routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", authMiddleware, productRoutes);
app.use("/api/v1/cart", authMiddleware, cartRoutes);
app.use("/api/v1/coupon", authMiddleware, couponRoutes);
app.use("/api/v1/order", authMiddleware, orderRoutes);

mongoose
    .connect(DB_URI)
    .then(() => console.log(`DB Connected successfully`))
    .catch(err => console.error("ERROR WHILE CONNECTING DATABASE", err));

app.listen(portNo, () => console.log(`eComm services are up and running at port ${portNo}`));