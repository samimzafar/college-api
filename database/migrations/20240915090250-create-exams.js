"use strict";

const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TableNames.EXAMS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.ENUM("annual", "mid", "sessional"), // Enum field
        allowNull: false,
      },
      shift: {
        type: Sequelize.ENUM("morning", "evening"), // Enum field
        allowNull: false,
      },
      fk_dept_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: TableNames.DEPARTMENTS, // References the departments table
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
    await queryInterface.dropTable(TableNames.EXAMS);
  },
};
