const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const AuthService = require("./service");
const TokenService = require("../token/service");

const catchAsync = require("../../utils/catch-error");

// register default as kader
const register = CatchAsync(async (req, res) => {
  const user = await AuthService.createUser(req.body);
  const token = await TokenService.generateAuthTokens(user);

  return res.status(httpStatus.CREATED).json({
    success: true,
    data: {
      user,
      token,
    },
  });
});

// register default as kader
const registerNakes = CatchAsync(async (req, res) => {
  let payload = req.body;
  payload.role = "nakes";
  const user = await AuthService.createUser(payload);
  const token = await TokenService.generateAuthTokens(user);

  return res.status(httpStatus.CREATED).json({
    success: true,
    data: {
      user,
      token,
    },
  });
});

const login = CatchAsync(async (req, res) => {
  const user = await AuthService.login(req.body);
  const token = await TokenService.generateAuthTokens(user);

  res.json({
    success: true,
    data: {
      user,
      token,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { token } = req.query;
  const tokens = await AuthService.refreshToken(token);
  res.send({ token: { ...tokens } });
});

const logout = CatchAsync(async (req, res) => {
  // const token = JSON.parse(req.body)
  console.log(req.body, 'req.body');
  const { token } = req.query;

  await AuthService.logout(token);
  res.status(httpStatus.OK).send({ message: "Logout Success" });
});

module.exports = {
  register,
  registerNakes,
  login,
  refreshToken,
  logout,
};
