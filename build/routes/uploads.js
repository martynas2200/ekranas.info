"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var checkLogin_1 = require("../middlewares/checkLogin");
var checkRole_1 = require("../middlewares/checkRole");
var UploadsController_1 = require("../controllers/UploadsController");
var fileUpload = require("express-fileupload");
var router = (0, express_1.Router)();
router.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
// Get all Uploads
// router.get("/", [checkLogin], UploadsController);
// Get one upload
// router.get("/:id([0-9]+)", [checkLogin], UploadsController.getOneById);
// Create a new upload
router.post("/", [checkLogin_1.checkLogin], UploadsController_1.default.imageUpload);
router.post("/logo", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], UploadsController_1.default.logoUpload);
// Edit one upload
// router.put( "/:id([0-9]+)", [checkLogin], UploadsController.update);
// router.put( "/visibility/:id([0-9]+)", [checkLogin], UploadsController.toggleVisibility);
//Delete one upload
// router.delete( "/:id([0-9]+)", [checkLogin], UploadsController.delete);
exports.default = router;
//# sourceMappingURL=uploads.js.map