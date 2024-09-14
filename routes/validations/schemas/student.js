const Joi = require("joi");
module.exports = {
  loginSchema: Joi.object({
    age: Joi.number().allow("", null),
    instituteId: Joi.number().allow("", null),
    gradeId: Joi.number().allow("", null),
    phoneNumber: Joi.string().required().min(13).max(13),
  })
};
