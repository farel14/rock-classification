import { Router } from "express";
import { CharacteristicController } from "../controller/characteristic.controller";
import { RockController } from "../controller/rock.controller";

const router = Router();

router.get("/", RockController.getAll);

router.get("/questions", CharacteristicController.getAll);

router.get("/random", CharacteristicController.random);

router.post("/create", RockController.seed)

export default router;
