import { Router } from "express";
import { checkLogin } from "../middlewares/checkLogin";
import { checkRole } from "../middlewares/checkRole";
import UploadsController from "../controllers/UploadsController";
import * as fileUpload from 'express-fileupload';

const router = Router();

router.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// Get all Uploads
// router.get("/", [checkLogin], UploadsController);

// Get one upload
// router.get("/:id([0-9]+)", [checkLogin], UploadsController.getOneById);

// Create a new upload
router.post("/", [checkLogin], UploadsController.imageUpload);
router.post("/logo", [checkLogin, checkRole(2)], UploadsController.logoUpload);

// Edit one upload
// router.put( "/:id([0-9]+)", [checkLogin], UploadsController.update);
// router.put( "/visibility/:id([0-9]+)", [checkLogin], UploadsController.toggleVisibility);

//Delete one upload
// router.delete( "/:id([0-9]+)", [checkLogin], UploadsController.delete);

export default router;