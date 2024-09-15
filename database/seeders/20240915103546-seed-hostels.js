'use strict';

const { TableNames } = require("../../utils/Constants");
const moment = require("moment");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(TableNames.HOSTELS, [
      {
        name: 'Maple Residence',
        no_of_seats: 150,
        createdAt: moment().unix(), // Using UNIX timestamp
        updatedAt: moment().unix(),
      },
      {
        name: 'Sunrise Hall',
        no_of_seats: 200,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Evergreen Hostel',
        no_of_seats: 120,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Cedar Lodge',
        no_of_seats: 180,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      },
      {
        name: 'Riverside Hostel',
        no_of_seats: 220,
        createdAt: moment().unix(),
        updatedAt: moment().unix(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(TableNames.HOSTELS, null, {});
  }
};
