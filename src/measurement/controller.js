const httpStatus = require("http-status");
const CatchAsync = require("../../utils/catch-error");

const MeasurementSercive = require("./service");

const getAll = CatchAsync(async(req, res) => { 
    const measurements = await MeasurementSercive.getAll()

    return res.status(httpStatus.OK).json({
        success: true,
        result: measurements
    })
})

const create = CatchAsync(async(req, res) => {
    const user = req.user;
    let payload = req.body;

    payload.user_id =  user.id;
    const measurement = await MeasurementSercive.create(payload)

    return res.status(httpStatus.OK).json({
        success: true,
        result: measurement
    })
})

module.exports = {
    getAll,
    create
}