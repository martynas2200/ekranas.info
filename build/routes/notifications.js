"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var checkLogin_1 = require("../middlewares/checkLogin");
var NotificationsController_1 = require("../controllers/NotificationsController");
var router = express_1.Router();
// Get all notifications
router.get("/", [checkLogin_1.checkLogin], NotificationsController_1.default.listAll);
// Get one notification
// router.get("/:id([0-9]+)", [checkLogin], NotificationsController.getOneById);
// Create a new notification
router.post("/", [checkLogin_1.checkLogin], NotificationsController_1.default.new);
// Edit one notification
router.put("/:id([0-9]+)", [checkLogin_1.checkLogin], NotificationsController_1.default.update);
router.put("/visibility/:id([0-9]+)", [checkLogin_1.checkLogin], NotificationsController_1.default.toggleVisibility);
//Delete one notification
router.delete("/:id([0-9]+)", [checkLogin_1.checkLogin], NotificationsController_1.default.delete);
exports.default = router;
//# sourceMappingURL=notifications.js.map