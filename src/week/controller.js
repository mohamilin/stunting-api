const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");

const WeekService = require("./service");

const getAll = CatchAsync(async (req, res) => {
  const weeks = await WeekService.getAll();

  return res.status(httpStatus.OK).json({
    success: true,
    result: weeks,
  });
});

const create = CatchAsync(async (req, res) => {
  const user = req.user;
  let payload = req.body;
  payload.user_id = user.id;
  const week = await WeekService.create(payload);

  return res.status(httpStatus.CREATED).json({
    success: true,
    result: week,
  });
});
module.exports = {
  getAll,
  create,
};
