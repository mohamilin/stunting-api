"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class toddlers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  toddlers.init({
    nik: DataTypes.STRING,
    fullname: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    tempat_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    foto_url: DataTypes.STRING,
    berat_badan: DataTypes.FLOAT,
    tinggi_badan: DataTypes.FLOAT,
    lingkar_lengan_atas: DataTypes.FLOAT,
    stunting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    nakes_id: DataTypes.INTEGER,
    validator_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    deleted_by: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "toddlers",
  });
  return toddlers;
};