"use strict";

const moment = require("moment");
const { TableNames, ForeignKeys } = require("../utils/Constants");

module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define(
    TableNames.SUBJECTS,
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fk_faculty_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      fk_std_id: {
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
  Subject.beforeCreate((subject) => {
    subject.dataValues.createdAt = moment().unix();
    subject.dataValues.updatedAt = moment().unix();
  });

  Subject.beforeUpdate((subject) => {
    subject.dataValues.updatedAt = moment().unix();
  });

  // Associations
  Subject.associate = (models) => {
    Subject.belongsTo(models.Faculties, {
      foreignKey: ForeignKeys.FK_FACULTY,
      as: "faculty",
    });
    Subject.belongsTo(models.Students, {
      foreignKey: ForeignKeys.FK_STUDENT,
      as: "student",
    });
  };

  return Subject;
};
