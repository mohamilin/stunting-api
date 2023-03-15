const httpStatus = require("http-status");
const ModelDatabase = require("../../database/models");
const ApiError = require("../../utils/api-error");
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
      id: user.user_id,
    },
  });
};

const getUserByPk = async (user_id) => {
  return Model.users.findByPk(user_id);
};

const getAll = async () => {
  return Model.users.findAll();
};

const deleteUser = async (payload) => {
  const {user_id, userLogin} = payload;
  const user = await getUserByPk(user_id);
  if(!user) throw new ApiError(httpStatus.NOT_FOUND, 'Data tidak ditemukan');
  if(user?.id === userLogin?.id)  throw new ApiError(httpStatus.BAD_REQUEST, 'Tidak diizinkan menghapus akun');
  return user.destroy();
};

module.exports = {
  getUserById,
  getAll,
  getUserByEmail,
  deleteUser,
};
