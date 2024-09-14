'use strict';

const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TableNames.HOSTELS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      no_of_seats: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
    await queryInterface.dropTable(TableNames.HOSTELS);
  }
};
