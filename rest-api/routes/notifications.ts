import { Router } from "express";
import { checkLogin } from "../middlewares/checkLogin";
import { checkRole } from "../middlewares/checkRole";
import NotificationsController from "../controllers/NotificationsController";

const router = Router();

// Get all notifications
router.get("/", [checkLogin], NotificationsController.listAll);

// Get one notification
// router.get("/:id([0-9]+)", [checkLogin], NotificationsController.getOneById);

// Create a new notification
router.post("/", [checkLogin], NotificationsController.new);

// Edit one notification
router.put( "/:id([0-9]+)", [checkLogin], NotificationsController.update);
router.put( "/visibility/:id([0-9]+)", [checkLogin], NotificationsController.toggleVisibility);

//Delete one notification
router.delete( "/:id([0-9]+)", [checkLogin], NotificationsController.delete);

export default router;