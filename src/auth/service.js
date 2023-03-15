const bcrypt = require("bcrypt");
const _ = require("lodash");

const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;
const httpStatus = require("http-status");
const ApiError = require("../../utils/api-error");

const UserService = require("../user/service");
const TokenService = require("../token/service");

const createUser = async (payload) => {
  const { firstname, lastname, email, password, role } = payload;
  const user = await Model.users.findOne({
    where: {
      email,
    },
    attributes: ["id", "email"],
  });

  if (user) throw new ApiError(httpStatus.BAD_REQUEST, "Email sudah digunakan");

  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  return Model.users.create({
    firstname,
    lastname,
    email,
    password: hashPassword,
    role
  });
};

const login = async (payload) => {
  const { password } = payload;
  const user = await UserService.getUserByEmail(payload);
  if (!user) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Periksa kembali email atau password anda !"
    );
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Periksa kembali email atau password anda !"
    );
  }
  return user;
};

const refreshToken = async (token) => {
  try {
    const tokens = await TokenService.verifyToken(
      token,
      process.env.TOKEN_TYPE_REFRESH
    );
    const user = await UserService.getUserById(tokens);

    if (!user) {
      throw new Error();
    }

    await TokenService.deleteToken(token, process.env.TOKEN_TYPE_REFRESH);
    return TokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate !");
  }
};

const logout = async (token) => {
  const refreshTokenDoc = await Model.tokens.findOne({
    where: { token },
  });

  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, "Not found");
  }
  await refreshTokenDoc.destroy();
};

module.exports = {
  createUser,
  login,
  refreshToken,
  logout,
};
