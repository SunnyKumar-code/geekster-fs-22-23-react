const FileModel = require("../models/file.model");

const uploadFile = async (req, res, next) => {
    try {
        const fileDetails = {
            originalName: req.file.originalname,
            modifiedName: req.file.filename,
            user: "divyansh@gmail.com",
            size: req.file.size,
            path: req.file.path
        };
        const insertedFileDetails = await FileModel.create(fileDetails);
        // console.log(req.file);
        res.json({
            success: true,
            message: "File upload API",
            fileId: insertedFileDetails._id
        });
    } catch (err) {
        next(err);
    }
};

const shareFile = async (req, res, next) => {
    try {
        /**
         * 1. Which file to share?
         * 2. Where is the file stored?
         * 3. What is the new file name after upload?
         * 4. File old name?
         */
        const fileDetails = await FileModel.findById(req.body.fileId);
        if (!fileDetails) {
            res.status(400).json({
                success: false,
                message: "File with give id does not exists"
            });
            return;
        }
        // console.log(fileDetails);
        res.json({
            success: true,
            message: "Share file API",
            data: `/files/download/${req.body.fileId}`
        });
    } catch (err) {
        next(err);
    }
};

const downloadFile = async (req, res, next) => {
    try {
        const fileDetails = await FileModel.findById(req.params.id);
        if (!fileDetails) {
            res.end("Invalid URL");
            return;
        }
        res.download(fileDetails.path, fileDetails.originalName);
    } catch (err) {
        next(err);
    }
};

const fileController = {
    uploadFile,
    shareFile,
    downloadFile
};

module.exports = fileController;