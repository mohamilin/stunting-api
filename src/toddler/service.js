const httpStatus = require("http-status");
const ModelDatabase = require("../../database/models");
const ApiError = require("../../utils/api-error");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const Model = ModelDatabase.sequelize.models;

const create = async (payload) => {
  const {
    nik,
    fullname,
    alamat,
    tempat_lahir,
    tgl_lahir,
    berat_badan,
    tinggi_badan,
    lingkar_lengan_atas,
    nakes_id,
    userId,
    filePath,
  } = payload;

  let resultUpload;
  if (filePath) {
    resultUpload = await cloudinary.uploader
      .upload(`${filePath}`)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new ApiError(httpStatus.BAD_REQUEST, err);
      });
  }

  return Model.toddlers.create({
    nik,
    fullname,
    alamat,
    tempat_lahir,
    tgl_lahir,
    foto_url: resultUpload?.secure_url ?? null,
    berat_badan,
    tinggi_badan,
    lingkar_lengan_atas,
    nakes_id,
    created_by: userId,
  });
};

const getToddlerByNik = async (nik) => {
  return Model.toddlers.findOne({ where: { nik } });
};

const getAll = async (nik) => {
  return Model.toddlers.findAll();
};

const getToddlerById = async (id) => {
  return Model.toddlers.findByPk(id);
};

const updateStunting = async (nik, payload) => {
  const toddler = await getToddlerByNik(nik);
  if (!toddler) throw new ApiError(httpStatus.NOT_FOUND, "NIK tidak ditemukan");
  return toddler.update({
    stunting: payload.status,
    validator_id: payload.user_id,
  });
};

const listToddlerByNakesId = async (nakesId) => {
  return Model.toddlers.findAll({
    where: {
      nakes_id: nakesId,
    },
  });
};

const listingStunting = async () => {
  return Model.toddlers.findAll({
    where: {
      stunting: true,
    },
  });
};

const listingStuntingByKader = async (user_id) => {
  return Model.toddlers.findAll({
    where: {
      stunting: true,
      created_by: user_id,
    },
  });
};

const deleteToddler = async (toddlerId) => {
  const toddler = await getToddlerById(toddlerId);
  if (!toddler) throw new ApiError(httpStatus.NOT_FOUND, "Id tidak ditemukan");
  return toddler.destroy()
};

module.exports = {
  create,
  getToddlerByNik,
  getAll,
  updateStunting,
  listToddlerByNakesId,
  listingStunting,
  listingStuntingByKader,
  deleteToddler,
};
