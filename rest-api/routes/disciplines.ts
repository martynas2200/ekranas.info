import { Router } from "express";
import { checkLogin } from "../middlewares/checkLogin";
import { checkRole } from "../middlewares/checkRole";
import DisciplinesController from "../controllers/DisciplinesController";

const router = Router();


// Get all Disciplines
router.get("/", [checkLogin], DisciplinesController.getAll);

// Get one Discipline
// router.get("/:id([0-9]+)", [checkLogin, checkRole(1)], DisciplinesController.getOneById);

// Create a new Discipline
router.post("/", [checkLogin, checkRole(1)], DisciplinesController.create);

// Edit one Discipline
router.put( "/:id([0-9]+)", [checkLogin, checkRole(1)], DisciplinesController.update);

// Delete one Discipline
router.delete( "/:id([0-9]+)", [checkLogin, checkRole(1)], DisciplinesController.delete);

export default router;