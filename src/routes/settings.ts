import { Router } from "express";
import { checkLogin } from "../middlewares/checkLogin";
import { checkRole } from "../middlewares/checkRole";
import SettingsController from "../controllers/SettingsController";

const router = Router();

// general settings 
router.get("/", [checkLogin ], SettingsController.getSettings);
router.put("/", [checkLogin, checkRole(2)], SettingsController.updateSettings);

// settings for timetable
router.get("/timetable", [checkLogin], SettingsController.getTimetableSettings);
router.put("/timetable", [checkLogin, checkRole(2)], SettingsController.updateTimetableSettings);

// Lessons times
router.get("/times", [checkLogin], SettingsController.getTimes);
router.post("/times", [checkLogin, checkRole(2)], SettingsController.createTime);
router.delete( "/times/:id([0-9]+)", [checkLogin, checkRole(2)], SettingsController.deleteTime);
router.put( "/times/:id([0-9]+)", [checkLogin, checkRole(2)], SettingsController.activateTime);

//Screen settings
router.get("/screens", [checkLogin], SettingsController.getScreens);
router.post("/screens", [checkLogin, checkRole(2)], SettingsController.createScreen);
router.delete( "/screens/:id([0-9]+)", [checkLogin, checkRole(2)], SettingsController.deleteScreen);
router.put( "/screens/:id([0-9]+)", [checkLogin, checkRole(2)], SettingsController.updateScreenSettings);
router.put( "/screens/key/:id([0-9]+)", [checkLogin, checkRole(2)], SettingsController.updateScreenKey);

export default router;