"use strict";

const moment = require("moment");
const { TableNames, ForeignKeys } = require("../utils/Constants");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    TableNames.COURSES,
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fk_dept_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
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
  Course.beforeCreate((course) => {
    course.dataValues.createdAt = moment().unix();
    course.dataValues.updatedAt = moment().unix();
  });

  Course.beforeUpdate((course) => {
    course.dataValues.updatedAt = moment().unix();
  });

  // Associations (assuming you have a Department model)
  Course.associate = (models) => {
    Course.belongsTo(models.Departments, {
      foreignKey: ForeignKeys.FK_DEPT,
      as: "department",
    });
  };

  return Course;
};
