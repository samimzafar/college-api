'use strict';
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(TableNames.FACULTIES, [
      {
        name: 'Dr. Alice Johnson',
        salary: 80000,
        fk_dept_id: 1, // Make sure this ID matches an existing Department
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Prof. Bob Smith',
        salary: 90000,
        fk_dept_id: 2, // Make sure this ID matches an existing Department
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Dr. Carol Davis',
        salary: 85000,
        fk_dept_id: 3, // Make sure this ID matches an existing Department
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Prof. David Lee',
        salary: 95000,
        fk_dept_id: 4, // Make sure this ID matches an existing Department
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(TableNames.FACULTIES, null, {});
  }
};
