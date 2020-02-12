import { Router } from "express";
import { checkLogin } from "../middlewares/checkLogin";
import { checkRole } from "../middlewares/checkRole";
import TimetablesController from "../controllers/TimetablesController";

const router = Router();


// Get all table
router.get("/:semester([0-9]+)/:day([0-9]+)", [checkLogin], TimetablesController.getByDayAndSemester);

// Get classes
router.get('/classes', [checkLogin], TimetablesController.getClasses)

// Create a new timetable row
router.post("/", [checkLogin], TimetablesController.create);

// Edit one timetable row
router.put( "/:id([0-9]+)", [checkLogin], TimetablesController.update);

// Delete one timetable row
router.delete( "/:semester([1-2])/:weekDay([1-5])/:id([0-9]+)", [checkLogin], TimetablesController.delete);

export default router;