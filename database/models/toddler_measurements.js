'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class toddler_measurements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  toddler_measurements.init({
    berat_badan: DataTypes.FLOAT,
    tinggi_badan: DataTypes.FLOAT,
    lingkar_lengan_atas: DataTypes.FLOAT,
    week_id: DataTypes.INTEGER,
    toodler_id: DataTypes.INTEGER,
    nakes_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'toddler_measurements',
  });
  return toddler_measurements;
};