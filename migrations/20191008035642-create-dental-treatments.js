'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dental_treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER
      },
      mode: {
        type: Sequelize.STRING
      },
      consultation_date: {
        type: Sequelize.DATE
      },
      nature: {
        type: Sequelize.STRING
      },
      referred_from: {
        type: Sequelize.STRING
      },
      referred_to: {
        type: Sequelize.STRING
      },
      referred_by: {
        type: Sequelize.STRING
      },
      last_dentist: {
        type: Sequelize.STRING
      },
      letter_number: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.TEXT
      },
      health_care_provider: {
        type: Sequelize.STRING
      },
      performed_lab_test: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('dental_treatments');
  }
};