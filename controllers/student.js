const { successResponse } = require("../utils/buildResponse");
const { Students } = require("../models");
module.exports = {
  get: async (req, res, next) => {
    try {
      const students = await Students.fetchStudentDetails()
      successResponse(res, 200, "Students retrieved successfully", students);
    } catch (error) {
      next(error);
    }
  },
};
