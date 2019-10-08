'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER
      },
      ipt_no: {
        type: Sequelize.STRING
      },
      date_opened: {
        type: Sequelize.DATE
      },
      region_province: {
        type: Sequelize.STRING
      },
      dots_facility: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      bcg_scar: {
        type: Sequelize.STRING
      },
      tst_result: {
        type: Sequelize.STRING
      },
      tst_date: {
        type: Sequelize.DATE
      },
      cxr_result: {
        type: Sequelize.STRING
      },
      cxr_date: {
        type: Sequelize.DATE
      },
      other_exam_result: {
        type: Sequelize.STRING
      },
      other_exam_date: {
        type: Sequelize.DATE
      },
      xpert_result: {
        type: Sequelize.STRING
      },
      xpert_date: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('tb_treatments');
  }
};