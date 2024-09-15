"use strict";
const { TableNames } = require("../../utils/Constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TableNames.STD_COURSES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fk_std_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: TableNames.STUDENTS, // References the students table
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      fk_course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: TableNames.COURSES, // References the courses table
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TableNames.STD_COURSES);
  },
};
