import { NextFunction, Request, Response, Router } from "express";
import { CharacteristicService } from "../services/characteristic.service";
import { RockService } from "../services/rock.service";
import wiki from "./wiki.route";

const router = Router();

router.use("/wiki", wiki);

router.post(
  "/seed",
  async (req: Request, res: Response, next: NextFunction) => {
    // drop all

    // seed all
    try {
      const a = await Promise.all([
        RockService.seed(),
        CharacteristicService.seed(),
      ]);
      res.status(201).end();
    } catch (error) {
      next(error);
    }
  }
);

export default router;
