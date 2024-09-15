"use strict";
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(TableNames.SUBJECTS, [
      {
        name: "Mathematics",
        fk_faculty_id: 1, // Replace with a valid Faculty ID
        fk_std_id: 1, // Replace with a valid Student ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Physics",
        fk_faculty_id: 2, // Replace with a valid Faculty ID
        fk_std_id: 2, // Replace with a valid Student ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Chemistry",
        fk_faculty_id: 1, // Replace with a valid Faculty ID
        fk_std_id: 3, // Replace with a valid Student ID
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete(TableNames.SUBJECTS, null, {});
  },
};
