"use strict";
const { TableNames } = require("../../utils/Constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TableNames.SUBJECTS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fk_std_id: {
        type: Sequelize.INTEGER,
        references: {
          model: TableNames.STUDENTS, // The model name as in the database (Hostels table)
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE", // Ensures data integrity
        onDelete: "SET NULL", // Optionally: If a hostel is deleted, set hostelId to null in students
      },
      fk_faculty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: TableNames.FACULTIES, // The model name as in the database (Hostels table)
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE", // Ensures data integrity
        onDelete: "SET NULL", // Optionally: If a hostel is deleted, set hostelId to null in students
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

  down: async (queryInterface) => {
    await queryInterface.dropTable(TableNames.STUDENTS);
  },
};
