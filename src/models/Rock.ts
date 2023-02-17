import { Column, CreatedAt, Table, UpdatedAt, Model, DataType } from "sequelize-typescript";

enum RockGroup {
    Igneous = 'igneous',
    Sedimentary = 'sedimentary',
    Metamorphic = 'metamorphic',
}

@Table
export class Rock extends Model<Rock> {

  @Column(DataType.STRING)
  shortName!: string;

  @Column(DataType.STRING)
  fullName!: string;

  @Column(DataType.TEXT)
  image?: string;

  @Column(DataType.STRING)
  group!: RockGroup;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;

}