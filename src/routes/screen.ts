import { Router } from "express";
import WallDataController from "../controllers/ScreenController";

const router = Router();

router.get('/day', WallDataController.dayInfo);
router.get('/weather', WallDataController.weather);
router.get('/:clue/notifications', WallDataController.notifications);
router.get('/:clue/lessons', WallDataController.timetable);
router.get('/:clue', WallDataController.getSettings);

// router.post('/error', );

export default router;