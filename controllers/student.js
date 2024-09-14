const { successResponse } = require("../utils/buildResponse");
module.exports = {
  get: async (req, res, next) => {
    try {
      successResponse(res, 200, "Student Controller");
    } catch (error) {
      next(error);
    }
  }
};
