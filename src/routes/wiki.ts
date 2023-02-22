import { Router } from "express";
import { RockController } from "../controller/rock.controller";

const router = Router();

router.get("/", RockController.getAll);

router.post("/create", RockController.seed)

export default router;
