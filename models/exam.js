'use strict';

const moment = require("moment");
const { TableNames, ForeignKeys } = require("../utils/Constants");

module.exports = (sequelize, DataTypes) => {
  const Exam = sequelize.define(
    TableNames.EXAMS,
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.ENUM('annual', 'mid', 'sessional'), // Enum field
        allowNull: false,
      },
      shift: {
        type: DataTypes.ENUM('morning', 'evening'), // Enum field
        allowNull: false,
      },
      fk_dept_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
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
  Exam.beforeCreate((exam) => {
    exam.dataValues.createdAt = moment().unix();
    exam.dataValues.updatedAt = moment().unix();
  });

  Exam.beforeUpdate((exam) => {
    exam.dataValues.updatedAt = moment().unix();
  });

  // Associations (assuming you have a Department model)
  Exam.associate = (models) => {
    Exam.belongsTo(models.Departments, {
      foreignKey: ForeignKeys.FK_DEPARTMENT,
      as: 'department',
    });
  };
  return Exam;
};
