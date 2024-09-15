"use strict";
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");
module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(TableNames.STD_COURSES, [
      {
        fk_std_id: 1, // Replace with valid Student ID
        fk_course_id: 1, // Replace with valid Course ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        fk_std_id: 1, // Replace with valid Student ID
        fk_course_id: 2, // Replace with valid Course ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        fk_std_id: 2, // Replace with valid Student ID
        fk_course_id: 1, // Replace with valid Course ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        fk_std_id: 2, // Replace with valid Student ID
        fk_course_id: 3, // Replace with valid Course ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        fk_std_id: 3, // Replace with valid Student ID
        fk_course_id: 4, // Replace with valid Course ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete(TableNames.STD_COURSES, null, {});
  },
};
