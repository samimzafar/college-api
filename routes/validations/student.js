const {
  student: {
    loginSchema
  },
} = require("./schemas");
const ApiError = require("../../utils/ApiError");
module.exports = {
  validateLogin: (req, res, next) => {
    const { error } = loginSchema.validate(req.body, {
      errors: { label: "key", wrap: { label: false } },
    });
    if (error) {
      throw new ApiError(400, error.details[0].message);
    } else {
      next();
    }
  },
};
