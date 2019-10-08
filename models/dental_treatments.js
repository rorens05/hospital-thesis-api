'use strict';
module.exports = (sequelize, DataTypes) => {
  const dental_treatments = sequelize.define('dental_treatments', {
    patient_id: DataTypes.INTEGER,
    mode: DataTypes.STRING,
    consultation_date: DataTypes.DATE,
    nature: DataTypes.STRING,
    referred_from: DataTypes.STRING,
    referred_to: DataTypes.STRING,
    referred_by: DataTypes.STRING,
    last_dentist: DataTypes.STRING,
    letter_number: DataTypes.STRING,
    remarks: DataTypes.TEXT,
    health_care_provider: DataTypes.STRING,
    performed_lab_test: DataTypes.STRING
  }, {});
  dental_treatments.associate = function(models) {
    // associations can be defined here
  };
  return dental_treatments;
};