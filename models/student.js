("use strict");
const moment = require("moment");
const { Op } = require("sequelize");
const { TableNames, ForeignKeys } = require("../utils/Constants");
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    TableNames.STUDENTS,
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
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      fk_hostel_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    {
      defaultScope: {
        where: {
          archived: false,
          name: { [Op.ne]: null },
        },
      },
    }
  );
  Student.beforeCreate((student) => {
    student.dataValues.createdAt = moment().unix();
    student.dataValues.updatedAt = moment().unix();
  });

  Student.beforeUpdate((student) => {
    student.dataValues.updatedAt = moment().unix();
  });
  // Association with Hostel
  Student.associate = (models) => {
    Student.belongsTo(models.Hostel, {
      foreignKey: ForeignKeys.FK_HOSTEL,
      as: TableNames.HOSTEL,
    });
  };
  return Student;
};
