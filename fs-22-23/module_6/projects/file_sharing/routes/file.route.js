const express = require("express");

const upload = require("../middlewares/fileUpload");

const fileController = require("../controllers/file.controller");

const router = express.Router();

router.post("/api/v1/file/upload", upload.single("file"), fileController.uploadFile);

router.post("/api/v1/file/share", fileController.shareFile);

router.get("/files/download/:id", fileController.downloadFile);

module.exports = router;