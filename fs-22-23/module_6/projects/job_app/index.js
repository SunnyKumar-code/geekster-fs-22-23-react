const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./route/job.route");

const app = express();

// Middlewares
app.use(express.json());

// DB Connection
const DB_URI = "mongodb://127.0.0.1:27017/job_app";
mongoose
    .connect(DB_URI)
    .then(() => console.log("DB Connected successfully"))
    .catch((err) => console.log("ERROR WHILE CONNECTING DATABASE", err));

// Modular routes
app.use("/api/v1/job", jobRoutes);

const portNo = 5000;
app.listen(portNo, () => console.log(`Server is up and running at port ${portNo}`));