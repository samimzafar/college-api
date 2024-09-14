const { Students, Institutes, Grades } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config");
const ApiError = require("../utils/ApiError");
module.exports = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const authToken = req.header("Authorization");
    const secret = config.get("signIn.jwtSecret");
    if (!authToken) {
      throw new ApiError(400, "Authorization Header is required");
    }
    const decoded = jwt.verify(authToken, secret);
    const student = await Students.unscoped().findByPk(studentId, {
      include: [
        {
          model: Institutes,
          as: "institute",
          attributes: ["name", "logo", "branch"],
        },
        {
          model: Grades,
          as: "grade",
          attributes: ["name"],
        },
      ],
    });
    if (!student) {
      throw new ApiError(400, "Student doesn't exists");
    }
    if (student.id !== decoded.data.id) {
      throw new ApiError(400, "Invalid token");
    }
    req.student = student;
    next();
  } catch (err) {
    next(err);
  }
};
