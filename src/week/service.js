const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getAll = async () => {
  return Model.category_weeks.findAll();
};

const create = async (payload) => {
  const { user_id, name, number_name } = payload;

  return Model.category_weeks.create({
    name,
    number_name,
    created_by: user_id,
  });
};

module.exports = {
  getAll,
  create,
};
