'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('general_treatments', {
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
      date_of_consultation: {
        type: Sequelize.STRING
      },
      referred_from: {
        type: Sequelize.STRING
      },
      referred_by: {
        type: Sequelize.STRING
      },
      referred_to: {
        type: Sequelize.STRING
      },
      reasons_for_referral: {
        type: Sequelize.STRING
      },
      blood_pressure: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      attending_provider: {
        type: Sequelize.STRING
      },
      nature_of_visit: {
        type: Sequelize.STRING
      },
      type_of_consultation: {
        type: Sequelize.STRING
      },
      chief_complaints: {
        type: Sequelize.STRING
      },
      diagnosis: {
        type: Sequelize.TEXT
      },
      medication: {
        type: Sequelize.TEXT
      },
      laboratory_findings: {
        type: Sequelize.TEXT
      },
      health_care_provider: {
        type: Sequelize.STRING
      },
      performed_laboratory_test: {
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
    return queryInterface.dropTable('general_treatments');
  }
};