import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkLogin } from "../middlewares/checkLogin";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

// //Get all users
router.get("/", [checkLogin, checkRole(2)], UserController.listAll);


//Create a new user
router.post("/", [checkLogin, checkRole(2)], UserController.newUser);

//Edit one user
router.put(
  "/:id([0-9]+)",
  [checkLogin, checkRole(2)],
  UserController.editUser
);

//Delete one user
router.delete(
  "/:id([0-9]+)",
  [checkLogin, checkRole(2)],
  UserController.deleteUser
);

// // Get one user
router.get(
  "/:clue",
  UserController.getOneByClue
);

router.post(
  "/:clue",
  UserController.saveOneByClue
);
export default router;