import { Request, Response, NextFunction } from "express";
import { RockService } from "../services/rock.service";

export class RockController {
  static async seed(req: Request, res: Response, next: NextFunction) {
    try {
      const rockList = await RockService.seed();
      res.status(201);
      res.json(rockList)
    } catch (error) {
      // res.status(500);
      next(error)
    }
  }
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const rockList = await RockService.findAll();
      res.status(201);
      res.json(rockList)
    } catch (error) {
      // res.status(500);
      next(error);
    }
  }
}
