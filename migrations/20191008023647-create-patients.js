'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      last_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      suffix: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      residential_address: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      birth_place: {
        type: Sequelize.STRING
      },
      civil_status: {
        type: Sequelize.STRING
      },
      educational_attainment: {
        type: Sequelize.STRING
      },
      employment_status: {
        type: Sequelize.STRING
      },
      family_member: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      facility_household_number: {
        type: Sequelize.STRING
      },
      philhealth_member: {
        type: Sequelize.STRING
      },
      status_type: {
        type: Sequelize.STRING
      },
      philhealth_no: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      family_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patients');
  }
};