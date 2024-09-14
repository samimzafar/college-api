("use strict");
const moment = require("moment");
const { Op } = require("sequelize");
const { TableNames, ForeignKeys } = require("../utils/Constants");
module.exports = (sequelize, DataTypes) => {
  const Hostel = sequelize.define(
    TableNames.HOSTELS,
    {
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
      no_of_seats: {
        type: DataTypes.INTEGER,
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
    },
  );
  Hostel.beforeCreate((hostel) => {
    hostel.dataValues.createdAt = moment().unix();
    hostel.dataValues.updatedAt = moment().unix();
  });

  Hostel.beforeUpdate((hostel) => {
    hostel.dataValues.updatedAt = moment().unix();
  });

  // Association with Student
  Hostel.associate = (models) => {
    Hostel.hasMany(models.Student, {
      foreignKey: ForeignKeys.FK_HOSTEL,
      as: TableNames.STUDENTS
    });
  };

  return Hostel;
};
