"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var checkLogin_1 = require("../middlewares/checkLogin");
var checkRole_1 = require("../middlewares/checkRole");
var SettingsController_1 = require("../controllers/SettingsController");
var router = (0, express_1.Router)();
// general settings 
router.get("/", [checkLogin_1.checkLogin], SettingsController_1.default.getSettings);
router.put("/", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.updateSettings);
// settings for timetable
router.get("/timetable", [checkLogin_1.checkLogin], SettingsController_1.default.getTimetableSettings);
router.put("/timetable", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.updateTimetableSettings);
// Lessons times
router.get("/times", [checkLogin_1.checkLogin], SettingsController_1.default.getTimes);
router.post("/times", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.createTime);
router.delete("/times/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.deleteTime);
router.put("/times/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.activateTime);
//Screen settings
router.get("/screens", [checkLogin_1.checkLogin], SettingsController_1.default.getScreens);
router.post("/screens", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.createScreen);
router.delete("/screens/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.deleteScreen);
router.put("/screens/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.updateScreenSettings);
router.put("/screens/key/:id([0-9]+)", [checkLogin_1.checkLogin, (0, checkRole_1.checkRole)(2)], SettingsController_1.default.updateScreenKey);
exports.default = router;
//# sourceMappingURL=settings.js.map