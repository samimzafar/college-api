'use strict';
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(TableNames.COURSES, [
      {
        name: 'Introduction to Computer Science',
        duration: 1, // Duration in years
        fk_dept_id: 1, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Advanced English Literature',
        duration: 1, // Duration in years
        fk_dept_id: 2, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Basic Mechanical Engineering',
        duration: 1, // Duration in years
        fk_dept_id: 3, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Structural Analysis in Civil Engineering',
        duration: 1, // Duration in years
        fk_dept_id: 4, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Business Administration Fundamentals',
        duration: 1, // Duration in years
        fk_dept_id: 5, // Replace with a valid Department ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(TableNames.COURSES, null, {});
  }
};
