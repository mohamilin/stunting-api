const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getUserByEmail = async (payload) => {
  return Model.users.findOne({
    where: {
      email: payload?.email,
    },
  });
};

const getUserById = async (user) => {
  return Model.users.findOne({
    where: {
      id: user.memberId,
    },
  });
};

const getAll = async () => {
  return Model.users.findAll();
};
module.exports = {
  getUserById,
  getAll,
  getUserByEmail,
};
