import { WhereOptions } from "sequelize/types";
import { StaticImplements, StaticServiceMethod } from "../interface";
import { Characteristic, CharacteristicType } from "../models/Characteristic";
import { characteristicSeeder } from "../seeders/characteristic.seeder";

@StaticImplements<StaticServiceMethod>() /* this statement implements both normal interface & static interface */
export class CharacteristicService {
  static async create(model: CharacteristicType): Promise<Characteristic> {
    return Characteristic.create(model);
  }
  static async upsertMany(
    model: CharacteristicType[]
  ): Promise<Characteristic[]> {
    return Characteristic.bulkCreate(model, {
      updateOnDuplicate: ["titleReadable", "description", "question"],
    });
  }
  static async findOne(filter: WhereOptions): Promise<Characteristic | null> {
    return Characteristic.findOne({ where: filter });
  }
  static async findAll(
    filter?: WhereOptions | undefined
  ): Promise<Characteristic[]> {
    return Characteristic.findAll(filter ? { where: filter } : undefined);
  }
  static async seed(): Promise<Characteristic[]> {
    const seedData = this.getSeedData();
    return this.upsertMany(seedData);
  }
  static getSeedData(): CharacteristicType[] {
    return characteristicSeeder;
  }
}
