'use strict';
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(TableNames.EXAMS, [
      {
        type: 'annual',
        shift: 'morning',
        fk_dept_id: 1, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        type: 'mid',
        shift: 'evening',
        fk_dept_id: 2, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        type: 'sessional',
        shift: 'morning',
        fk_dept_id: 3, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(TableNames.EXAMS, null, {});
  }
};
