import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { checkLogin } from "../middlewares/checkLogin";
const execFile = require('child_process').execFile;

const router = Router();

//Login route
router.post("/login", AuthController.login);
router.get("/loggout", AuthController.loggout);

//Login route
router.post("/user", AuthController.UserData);

// Reset password
router.post("/forgot", AuthController.forgotPassword);

//Change my password
router.post("/change/password", [checkLogin], AuthController.changePassword);
router.post("/change/username", [checkLogin], AuthController.changeUsername);
router.post("/change/email", [checkLogin], AuthController.changeEmail);

export default router;