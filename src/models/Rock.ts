import { Column, CreatedAt, Table, UpdatedAt, Model, DataType } from "sequelize-typescript";

enum RockGroup {
    Igneous = 'igneous',
    Sedimentary = 'sedimentary',
    Metamorphic = 'metamorphic',
}

@Table
export class Rock extends Model<Rock> {

  @Column
  shortName!: string;

  @Column
  fullName!: string;

  @Column(DataType.TEXT)
  image?: string;

  @Column
  group!: RockGroup;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}