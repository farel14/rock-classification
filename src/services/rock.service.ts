import { WhereOptions } from "sequelize/types";
import { StaticImplements, StaticServiceMethod } from "../interface";
import { Rock } from "../models/Rock";

@StaticImplements<StaticServiceMethod>() /* this statement implements both normal interface & static interface */
export class RockService {
  static async create(model: Rock): Promise<Rock> {
    return Rock.create(model);
  }
  static async upsertMany(model: Rock[]): Promise<Rock[]>  {
    return Rock.bulkCreate(model, { updateOnDuplicate: ['shortName'] })
  }
  static async findOne(filter: WhereOptions): Promise<Rock|null> {
    return Rock.findOne({ where: filter });
  }
  static async findAll(filter?: WhereOptions | undefined): Promise<Rock[]> {
    return Rock.findAll( filter ? { where: filter } : undefined);
  }
  static async seed(): Promise<Rock[]>  {
    const seedData = this.getSeedData()
    return Rock.bulkCreate(seedData, { updateOnDuplicate: ['shortName'] })
  }
  static getSeedData(): any[] {
    return []
  }
}
