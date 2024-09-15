("use strict");
const moment = require("moment");
const { TableNames, ForeignKeys } = require("../utils/Constants");
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define(TableNames.FACULTIES, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_dept_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
  Faculty.beforeCreate((faculty) => {
    faculty.dataValues.createdAt = moment().unix();
    faculty.dataValues.updatedAt = moment().unix();
  });

  Faculty.beforeUpdate((faculty) => {
    faculty.dataValues.updatedAt = moment().unix();
  });

  // Association with Student
  Faculty.associate = (models) => {
    Faculty.belongsTo(models.Departments, {
      as: "department",
      foreignKey: ForeignKeys.FK_DEPT,
    });
  };

  return Faculty;
};
