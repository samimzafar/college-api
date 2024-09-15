'use strict';

const { TableNames } = require("../../utils/Constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TableNames.FACULTIES, {
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
      salary: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      fk_dept_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: {
          model: TableNames.DEPARTMENTS, // References the departments table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER, // Using integer to store UNIX timestamps
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER, // Using integer to store UNIX timestamps
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TableNames.FACULTIES);
  },
};
