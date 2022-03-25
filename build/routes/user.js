"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var checkLogin_1 = require("../middlewares/checkLogin");
var checkRole_1 = require("../middlewares/checkRole");
var router = (0, express_1.Router)();
// //Get all users
router.get("/", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], UserController_1.default.listAll);
//Create a new user
router.post("/", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], UserController_1.default.newUser);
//Edit one user
router.put("/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], UserController_1.default.editUser);
//Delete one user
router.delete("/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], UserController_1.default.deleteUser);
// // Get one user
router.get("/:clue", UserController_1.default.getOneByClue);
router.post("/:clue", UserController_1.default.saveOneByClue);
exports.default = router;
//# sourceMappingURL=user.js.map