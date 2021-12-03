import { Router } from "express";
import ContactController from "../controllers/ContactController";

const router = Router();

router.post('/', ContactController.message);

router.post('/error', ContactController.log);


export default router;