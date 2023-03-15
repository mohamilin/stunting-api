const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");

const ToddlerService = require("../toddler/service");
const UserService = require("../user/service");

const listingStunting = CatchAsync(async (req, res) => {
  const listing = await ToddlerService.listingStunting();

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully get listing stunting",
    result: listing,
  });
});

const listingStuntingByKader = CatchAsync(async (req, res) => {
  const user = req.user;
  const listing = await ToddlerService.listingStuntingByKader(user.id);

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully get listing stunting by kader",
    result: listing,
  });
});

const deleteKader = CatchAsync(async (req, res) => {
  const { user_id } = req.params;
  const userLogin = req.user;

  const payload = {
    user_id,
    userLogin,
  };
  
  await UserService.deleteUser(payload);
  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully deleted",
  });
});

module.exports = { listingStunting, listingStuntingByKader, deleteKader };
