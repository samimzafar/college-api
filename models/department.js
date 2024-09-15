("use strict");
const moment = require("moment");
const { TableNames } = require("../utils/Constants");
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(TableNames.DEPARTMENTS, {
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
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
  Department.beforeCreate((department) => {
    department.dataValues.createdAt = moment().unix();
    department.dataValues.updatedAt = moment().unix();
  });

  Department.beforeUpdate((department) => {
    department.dataValues.updatedAt = moment().unix();
  });

  return Department;
};
