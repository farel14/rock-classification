import { Request, Response, NextFunction } from "express";
import { CharacteristicService } from "../services/characteristic.service";

export class CharacteristicController {
  static async seed(req: Request, res: Response, next: NextFunction) {
    try {
      const characteristicList = await CharacteristicService.seed();
      res.status(201);
      res.json(characteristicList)
    } catch (error) {
      // res.status(500);
      next(error)
    }
  }
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const characteristicList = await CharacteristicService.findAll();
      res.status(201);
      res.json(characteristicList)
    } catch (error) {
      // res.status(500);
      next(error);
    }
  }
  static async random(req: Request, res: Response, next: NextFunction) {
    try {
      const characteristicList = await CharacteristicService.findAll();
      const randomQuestion = characteristicList[Math.floor(Math.random() * characteristicList.length)];
      res.status(201);
      res.json(randomQuestion)
    } catch (error) {
      // res.status(500);
      next(error);
    }
  }
}
