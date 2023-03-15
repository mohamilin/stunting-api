const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const NakesService = require("./service");
const ToddlerService = require("../toddler/service");
const MeasurementSercive = require("../measurement/service");

const ApiError = require("../../utils/api-error");

const getAll = CatchAsync(async (req, res) => {
  const nakes = await NakesService.getAll();
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully get all",
    result: nakes,
  });
});

const validateToddler = CatchAsync(async (req, res) => {
  const { toddlerNik } = req.params;
  const user = req.user;
  const { status } = req.body;

  const user_id = user?.id;
  const payload = {
    status,
    user_id,
  };

  const toddler = await ToddlerService.getToddlerByNik(toddlerNik);
  await ToddlerService.updateStunting(toddlerNik, payload);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated validation",
    result: toddler,
  });
});

const toddlerSign = CatchAsync(async(req, res) => {
  const user = req.user;
  const user_id = user.id

  const listToddlerSign = await ToddlerService.listToddlerByNakesId(user_id)
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully list toddler by nakes id",
    result: listToddlerSign,
  });
})

const toddlerProgress = CatchAsync(async(req, res) => {
  const {toddlerId} = req.params;

  const progressToddler = await MeasurementSercive.toddlerProgress(toddlerId)

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully progress balita per week",
    result: progressToddler,
  });

})
module.exports = {
  validateToddler,
  getAll,
  toddlerSign,
  toddlerProgress
};
