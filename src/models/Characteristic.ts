import { Column, CreatedAt, Table, UpdatedAt, Model, DataType, ModelType, $GetType, ModelCtor, Unique } from "sequelize-typescript";

export interface CharacteristicType {
    title: string;
    titleReadable: string;
    description: string;
    question: string;
}

@Table
export class Characteristic extends Model {
  @Unique
  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.STRING)
  titleReadable!: string;

  @Column(DataType.STRING)
  description!: string;

  @Column(DataType.TEXT)
  question!: string;
}
