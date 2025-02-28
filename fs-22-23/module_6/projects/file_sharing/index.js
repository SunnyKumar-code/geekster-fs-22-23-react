const path = require("node:path");

const express = require("express");
const multer = require("multer");

/**
 * 1st Phase : File upload feature
 * 2nd Phase : APIs to download the file, generate shareable link etc
 */

const app = express();

// app.use(express.json());

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

const filePath =  path.join(__dirname,"uploaded_files");

const storage = multer.diskStorage({
    destination : filePath, // Path to save the file in SSD/HDD - disk storage
});

const upload = multer({ // Middleware initialization
    storage: storage
})


app.post("/file-upload", (req, res) => {
    const singleFileUploader = upload.single("profilePicture");
    singleFileUploader(req, res, () => {
        console.log(req.body);
        res.json({
            success: true,
            message: "File upload API"
        })
    });
});

app.listen(5000, () => console.log("Server is up and running at port 5000"));