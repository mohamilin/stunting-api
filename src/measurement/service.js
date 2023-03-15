const httpStatus = require("http-status");
const ModelDatabase = require("../../database/models");
const ApiError = require("../../utils/api-error");
const Model = ModelDatabase.sequelize.models;

const getAll = async () => {
  
  return Model.toddler_measurements.findAll();
};

const create = async (payload) => {
  const {
    user_id,
    week_id,
    toddler_id,
    nakes_id,
    berat_badan,
    tinggi_badan,
    lingkar_lengan_atas,
  } = payload;

  const isExist = await Model.toddler_measurements.findOne({
    where: {
      toddler_id,
      week_id,
    },
  });

  if (isExist)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Data minggu ini sudah digunakan"
    );

  return Model.toddler_measurements.create({
    week_id,
    toddler_id,
    nakes_id,
    berat_badan,
    tinggi_badan,
    lingkar_lengan_atas,
    created_by: user_id
  });
};

const toddlerProgress = async (id) => {
  return Model.toddler_measurements.findAll({
    where: {
      toddler_id: id
    },
    include: [
      {
        model: Model.category_weeks,
        as: 'week',
        attributes: ['id', 'name', 'number_name'],
      }
    ]
  })
}

module.exports = {
  getAll,
  create,
  toddlerProgress
};
