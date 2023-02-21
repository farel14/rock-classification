import { Model, ModelType } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";

// interface MyType {
//     instanceMethod();
// }

export interface StaticServiceMethod {
  // new():MyType;
//   static async create(model: Rock): Promise<Rock> {

  create(model: any): Promise<Model<any>>;
  upsertMany(model: any[]): Promise<Model<any>[]>;
  findOne(filter: WhereOptions): Promise<Model<any>|null>;
  findAll(filter?: WhereOptions | undefined): Promise<Model<any>[]>;
}

/* class decorator */
export function StaticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
