'use strict';

const moment = require("moment");
const { TableNames, ForeignKeys } = require("../utils/Constants");

module.exports = (sequelize, DataTypes) => {
  const Std_Course = sequelize.define(
    TableNames.STD_COURSES,
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_std_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fk_course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // Define any default scope or hooks here if necessary
    }
  );

  // Automatically set timestamps using moment
  Std_Course.beforeCreate((std_course) => {
    std_course.dataValues.createdAt = moment().unix();
    std_course.dataValues.updatedAt = moment().unix();
  });

  Std_Course.beforeUpdate((std_course) => {
    std_course.dataValues.updatedAt = moment().unix();
  });

  // Associations
  Std_Course.associate = (models) => {
    Std_Course.belongsTo(models.Students, {
      foreignKey: ForeignKeys.FK_STD,
      as: 'student',
    });
    Std_Course.belongsTo(models.Courses, {
      foreignKey: ForeignKeys.FK_COURSE,
      as: 'course',
    });
  };

  return Std_Course;
};
