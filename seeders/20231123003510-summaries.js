'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const uuid = uuidv4();
    const hashedPassword = await bcrypt.hash('admin', 10);
    await queryInterface.bulkInsert('users', [{
      id: uuid,
      firstname: 'firstname',
      lastname: 'lastname',
      username: 'admin',
      age: '20',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    const summariesData = Array.from({ length: 15 }, (_, index) => ({
      id: uuidv4(),
      idea_summary: `Summary ${index + 1}`,
      posted_by: uuid, // in case this fails it needs to be replaced by existing userId
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('summaries', summariesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('summaries', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
