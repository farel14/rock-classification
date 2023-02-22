import { Column, CreatedAt, Table, UpdatedAt, Model, DataType, ModelType, $GetType, ModelCtor, Unique } from "sequelize-typescript";
import { applyMixins, ModelAdditionalProperty } from "../interface";

export enum RockGroup {
    Igneous = 'igneous',
    Sedimentary = 'sedimentary',
    Metamorphic = 'metamorphic',
}

export interface RockType {
  shortName: string;
  fullName: string;
  image?: string;
  group: RockGroup;
}

@Table
export class Rock extends Model {
  @Unique
  @Column(DataType.STRING)
  shortName!: string;

  @Column(DataType.STRING)
  fullName!: string;

  @Column(DataType.TEXT)
  image?: string;

  @Column(DataType.STRING)
  group!: RockGroup;
}
