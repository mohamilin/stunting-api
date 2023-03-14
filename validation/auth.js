const Joi = require("joi");

const register = {
  body: Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('kader', 'nakes', 'admin')
  }),
};

module.exports = {
  register,
};
