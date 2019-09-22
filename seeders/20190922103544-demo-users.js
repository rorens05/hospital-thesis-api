'use strict';
const enc = require('./../util/encryption')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					first_name: 'Laurence',
					last_name: 'Bautista',
					email: 'laurence@gmail.com',
					username: 'admin',
					role: 'admin',
					password_digest: await enc.encrypt('password'),
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					first_name: 'John',
					last_name: 'Doe',
					email: 'john.doe@gmail.com',
					username: 'user',
					role: 'user',
					password_digest: await enc.encrypt('password'),
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
