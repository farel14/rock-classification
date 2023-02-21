import { Request, Response, NextFunction } from 'express';
import { RockService } from '../services/rock.service';

export class RockController {
    static async seed(req: Request, res: Response, next: NextFunction) {
        await RockService.seed()
        res.status(201)
    }
}