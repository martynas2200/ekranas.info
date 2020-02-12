"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = require("../controllers/AuthController");
var checkLogin_1 = require("../middlewares/checkLogin");
var execFile = require('child_process').execFile;
var router = express_1.Router();
//Login route
router.post("/login", AuthController_1.default.login);
router.get("/loggout", AuthController_1.default.loggout);
//Login route
router.post("/user", AuthController_1.default.UserData);
// Reset password
router.post("/forgot", AuthController_1.default.forgotPassword);
//Change my password
router.post("/change/password", [checkLogin_1.checkLogin], AuthController_1.default.changePassword);
router.post("/change/username", [checkLogin_1.checkLogin], AuthController_1.default.changeUsername);
router.post("/change/email", [checkLogin_1.checkLogin], AuthController_1.default.changeEmail);
exports.default = router;
//# sourceMappingURL=auth.js.map