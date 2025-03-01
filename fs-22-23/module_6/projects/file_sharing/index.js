const express = require("express");

const mongoose = require("mongoose");


const fileRoute = require("./routes/file.route");

/**
 * 1st Phase : File upload feature
 * 2nd Phase : APIs to download the file, generate shareable link etc
 */

const app = express();

app.use(express.json());

/**
 * Middleware
 * 1. Parse file data and convert into JSON
 * 2. It helps in reading the file form api body as well
 */

/**
 * Points to consider for file upload
 * 1. Where to save the file (RAM - memory storage, HDD/SSD - disk storage)? (Path/Folder/Directory)
 * 2. File Validation (Which type of files are allowed to be uploaded)
 *      2.1 Size of file
 *      2.2 Type of the file
 * 3. Filename after upload (WA20250227213700.jpg)
 */

// DB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/file_sharing_app")
    .then(() => console.log("DB Connected successfully"))
    .catch(err => console.log("ERROR CONNECTING TO DB", err));

// Moudlar routes
app.use(fileRoute);

app.listen(5000, () => console.log("Server is up and running at port 5000"));