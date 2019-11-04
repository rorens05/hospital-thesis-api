'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('maternal_treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER
      },
      consulation_date: {
        type: Sequelize.DATE
      },
      last_mestruation_date: {
        type: Sequelize.DATE
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
      expected_date: {
        type: Sequelize.DATE
      },
      attending_provider: {
        type: Sequelize.STRING
      },
      diagnosis_date: {
        type: Sequelize.DATE
      },
      type_of_delivery: {
        type: Sequelize.STRING
      },
      birth_outcome: {
        type: Sequelize.STRING
      },
      number_of_children: {
        type: Sequelize.STRING
      },
      pregnancy_condition: {
        type: Sequelize.STRING
      },
      medical: {
        type: Sequelize.TEXT
      },
      lab_findings: {
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
    return queryInterface.dropTable('maternal_treatments');
  }
};