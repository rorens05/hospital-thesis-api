'use strict';
module.exports = (sequelize, DataTypes) => {
  const immunation_treatments = sequelize.define('immunation_treatments', {
    patient_id: DataTypes.INTEGER,
    mother_name: DataTypes.STRING,
    father_name: DataTypes.STRING,
    birth_height: DataTypes.STRING,
    birth_weight: DataTypes.STRING,
    bgc_doses: DataTypes.INTEGER,
    bgc_date: DataTypes.DATE,
    hepatitisb_doses: DataTypes.INTEGER,
    hepatitisb_date: DataTypes.DATE,
    pentavalent_doses: DataTypes.INTEGER,
    pentavalent_date1: DataTypes.DATE,
    pentavalent_date2: DataTypes.DATE,
    pentavalent_date3: DataTypes.DATE,
    polio_doses: DataTypes.INTEGER,
    polio_date1: DataTypes.DATE,
    polio_date2: DataTypes.DATE,
    polio_date3: DataTypes.DATE,
    inactive_polio_doses: DataTypes.INTEGER,
    inactive_polio_date: DataTypes.DATE,
    pneumococcal_doses: DataTypes.INTEGER,
    pneumococcal_date1: DataTypes.DATE,
    pneumococcal_date2: DataTypes.DATE,
    pneumococcal_date3: DataTypes.DATE,
    measles_doses: DataTypes.INTEGER,
    measles_date1: DataTypes.DATE,
    measles_date2: DataTypes.DATE
  }, {});
  immunation_treatments.associate = function(models) {
    // associations can be defined here
  };
  return immunation_treatments;
};