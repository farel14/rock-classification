import { WhereOptions } from "sequelize/types";
import { StaticImplements, StaticServiceMethod } from "../interface";
import { Rock, RockGroup, RockType } from "../models/Rock";
import { rockSeeder } from "../seeders/rock.seeder";

@StaticImplements<StaticServiceMethod>() /* this statement implements both normal interface & static interface */
export class RockService {
  static async create(model: RockType): Promise<Rock> {
    return Rock.create(model);
  }
  static async upsertMany(model: RockType[]): Promise<Rock[]> {
    return Rock.bulkCreate(model, { updateOnDuplicate: [
      'fullName',
      'image',
      'group',
    ] });
  }
  static async findOne(filter: WhereOptions): Promise<Rock | null> {
    return Rock.findOne({ where: filter });
  }
  static async findAll(
    filter?: WhereOptions | undefined
  ): Promise<Rock[]> {
    return Rock.findAll(filter ? { where: filter } : undefined);
  }
  static async seed(): Promise<Rock[]> {
    const seedData = this.getSeedData();
    return this.upsertMany(seedData);
  }
  static getSeedData(): RockType[] {
    return rockSeeder;
  }
}
