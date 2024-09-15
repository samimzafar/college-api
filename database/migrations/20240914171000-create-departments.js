"use strict";
const { TableNames } = require("../../utils/Constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TableNames.DEPARTMENTS, {
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
