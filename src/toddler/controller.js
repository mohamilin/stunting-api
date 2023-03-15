const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");
const ToddlerService = require("./service");
const ApiError = require("../../utils/api-error");

const create = CatchAsync(async (req, res) => {
  try {
    const user = req.user;
    let payload = req.body;
    payload.userId = user?.id;
    payload.filePath = req.file?.path;
    const isExistNik = await ToddlerService.getToddlerByNik(payload.nik);

    if (isExistNik)
      throw new ApiError(httpStatus.BAD_REQUEST, "NIK sudah digunakan");

    const toddler = await ToddlerService.create(payload);

    return res.status(httpStatus.CREATED).json({
      success: true,
      message: "Successfully created",
      result: toddler,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed created",
      result: error,
    });
  }
});

const getAll = CatchAsync(async (req, res) => {
  const toddlers = await ToddlerService.getAll();
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully get all",
    result: toddlers,
  });
});

const deleteToddler = CatchAsync(async(req, res) => {
  const {toddler_id} = req.params;
  await ToddlerService.deleteToddler(toddler_id);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted",
  });
});

module.exports = {
  create,
  getAll,
  deleteToddler
};
