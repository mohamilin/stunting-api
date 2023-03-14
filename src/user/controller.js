const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-error');
const UserService = require('./service');


const getAll = catchAsync(async (req, res) => {
    const user = await UserService.getAll()


    return res.status(200).json({
        success: true,
        data: user
    })
})


  
  const getUserById = async (id) => {
    return Model.users.findByPk(id, {
      include: [
        {
          model: Model.tags,
          as: "tags",
          where: {
            deletedAt: null,
          },
        },
      ],
  
      attributes: [
        "id",
        "firstName",
        "lastName",
        "username",
        "type",
        "exp",
        "age",
      ],
    });
  };
  
  const userDelete = async (id) => {
    const user = await Model.users.findByPk(id, {
      attributes: [
        "id",
        "firstName",
        "lastName",
        "username",
        "type",
        "exp",
        "age",
      ],
    });
  
    await user.destroy();
  
    return true
  };

module.exports = {
    getAll,
    getUserById,
    userDelete
}