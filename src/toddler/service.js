const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const create = async (payload) => {
  const {
    nik,
    fullname,
    alamat,
    tempat_lahir,
    tgl_lahir,
    foto_url,
    berat_badan,
    tinggi_badan,
    lingkar_lengan_atas,
    stunting,
    nakes_id,
    created_by,
  } = payload;

  return Model.toddlers.create({
    nik,
    fullname,
    alamat,
    tempat_lahir,
    tgl_lahir,
    foto_url,
    berat_badan,
    tinggi_badan,
    lingkar_lengan_atas,
    stunting,
    nakes_id,
    created_by,
  });
};

module.exports = {
  create,
};
