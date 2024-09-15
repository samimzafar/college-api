("use strict");
const moment = require("moment");
const { Op, col } = require("sequelize");
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
      fk_hostel_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      fk_faculty_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
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
    Student.belongsTo(models.Hostels, {
      as: "hostel",
      foreignKey: ForeignKeys.FK_HOSTEL,
    });

    Student.belongsTo(models.Faculties, {
      as: "faculty",
      foreignKey: ForeignKeys.FK_FACULTY,
    });
  };

  Student.fetchStudentDetails = async () => {
    const Models = sequelize.models;
    // const { departments, hostels, faculties } = sequelize.models
    return await Student.findAll({
      include: [
        {
          model: Models.hostels,
          as: "hostel",
          attributes: [],
        },
        {
          model: Models.faculties,
          as: "faculty",
          attributes: [],
          include: [
            {
              model: Models.departments,
              as: "department",
              attributes: [],
            },
          ],
        },
      ],
      attributes: [
        "id",
        "name",
        "age",
        [col("hostel.name"), "hostelName"],
        [col("faculty.name"), "facultyName"],
        [col("faculty->department.name"), "deptName"],
      ],
    });
  };
  return Student;
};
