"use strict";
const moment = require("moment");
const { TableNames } = require("../../utils/Constants");
module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(TableNames.DEPARTMENTS, [
      {
        name: "Computer Science",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Electrical Engineering",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Mechanical Engineering",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Civil Engineering",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Business Administration",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Physics",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: "Mathematics",
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete(TableNames.DEPARTMENTS, null, {});
  },
};
