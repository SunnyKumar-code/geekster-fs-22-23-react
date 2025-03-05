const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");

const app = express();

const portNo = 5000;
const DB_URI = "mongodb://127.0.0.1:27017/ecommerce";

// Global middlewares
app.use(express.json());

// Modular routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);

mongoose
    .connect(DB_URI)
    .then(() => console.log(`DB Connected successfully`))
    .catch(err => console.error("ERROR WHILE CONNECTING DATABASE", err));

app.listen(5000, () => console.log(`eComm services are up and running at port ${portNo}`));