'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rock.init({
    shortName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    group: DataTypes.ENUM('igneous', 'sedimentary', 'metamorphic'),
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Rock',
  });
  return Rock;
};