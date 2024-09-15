"use strict";
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(TableNames.STUDENTS, [
      {
        name: "John Doe",
        age: 20,
        fk_hostel_id: 1, // Replace with a valid Hostel ID
        fk_faculty_id: 1, // Replace with a valid Faculty ID
        archived: false,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Jane Smith",
        age: 22,
        fk_hostel_id: 2, // Replace with a valid Hostel ID
        fk_faculty_id: 2, // Replace with a valid Faculty ID
        archived: false,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Alice Johnson",
        age: 21,
        fk_hostel_id: 1, // Replace with a valid Hostel ID
        fk_faculty_id: 3, // Replace with a valid Faculty ID
        archived: false,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Bob Brown",
        age: 23,
        fk_hostel_id: 3, // Replace with a valid Hostel ID
        fk_faculty_id: 4, // Replace with a valid Faculty ID
        archived: false,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete(TableNames.STUDENTS, null, {});
  },
};
