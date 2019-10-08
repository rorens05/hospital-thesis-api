'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('immunation_treatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mother_name: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      birth_height: {
        type: Sequelize.STRING
      },
      birth_weight: {
        type: Sequelize.STRING
      },
      bgc_doses: {
        type: Sequelize.INTEGER
      },
      bgc_date: {
        type: Sequelize.DATE
      },
      hepatitisb_doses: {
        type: Sequelize.INTEGER
      },
      hepatitisb_date: {
        type: Sequelize.DATE
      },
      pentavalent_doses: {
        type: Sequelize.INTEGER
      },
      pentavalent_date1: {
        type: Sequelize.DATE
      },
      pentavalent_date2: {
        type: Sequelize.DATE
      },
      pentavalent_date3: {
        type: Sequelize.DATE
      },
      polio_doses: {
        type: Sequelize.INTEGER
      },
      polio_date1: {
        type: Sequelize.DATE
      },
      polio_date2: {
        type: Sequelize.DATE
      },
      polio_date3: {
        type: Sequelize.DATE
      },
      inactive_polio_doses: {
        type: Sequelize.INTEGER
      },
      inactive_polio_date: {
        type: Sequelize.DATE
      },
      pneumococcal_doses: {
        type: Sequelize.INTEGER
      },
      pneumococcal_date1: {
        type: Sequelize.DATE
      },
      pneumococcal_date2: {
        type: Sequelize.DATE
      },
      pneumococcal_date3: {
        type: Sequelize.DATE
      },
      measles_doses: {
        type: Sequelize.INTEGER
      },
      measles_date1: {
        type: Sequelize.DATE
      },
      measles_date2: {
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
    return queryInterface.dropTable('immunation_treatments');
  }
};