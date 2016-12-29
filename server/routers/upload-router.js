const multerFilename = require("../utils/multer-filename");

module.exports = function (server, uploadController, isAuthenticated) {
    //server.get("/api/profile/uploadfile", uploadController.showUploadForm);
    server.post("/api/profile/photo", multerFilename.single, uploadController.singleUpload);
};