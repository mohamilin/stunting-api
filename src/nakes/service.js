const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getAll = () => {
    return Model.users.findAll({
        where: {
            role: 'nakes'
        }
    })
}

module.exports = {
    getAll
}