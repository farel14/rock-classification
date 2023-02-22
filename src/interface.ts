import { Column, CreatedAt, DataType, IsUUID, Model, ModelType, PrimaryKey, UpdatedAt } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";


export class ModelAdditionalProperty {
    @PrimaryKey
    @Column
    id!: number;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
}

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

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
             if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    }); 
}
