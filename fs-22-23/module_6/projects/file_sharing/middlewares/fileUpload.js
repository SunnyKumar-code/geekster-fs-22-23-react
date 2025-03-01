const path = require("node:path");

const multer = require("multer");
const uuid = require("uuid");

const filePath = path.join(__dirname, "../uploaded_files");

const storage = multer.diskStorage({
    destination: filePath, // Path to save the file in SSD/HDD - disk storage
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = uuid.v4() + fileExtension;
        cb(null, fileName); // Multer will be informed about the new file name
    }
});

const upload = multer({ // Middleware initialization
    storage: storage
});

module.exports = upload;