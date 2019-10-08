'use strict';
module.exports = (sequelize, DataTypes) => {
  const general_treatments = sequelize.define('general_treatments', {
    patient_id: DataTypes.INTEGER,
    mode: DataTypes.STRING,
    date_of_consultation: DataTypes.STRING,
    referred_from: DataTypes.STRING,
    referred_by: DataTypes.STRING,
    referred_to: DataTypes.STRING,
    reasons_for_referral: DataTypes.STRING,
    blood_pressure: DataTypes.STRING,
    temperature: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    attending_provider: DataTypes.STRING,
    nature_of_visit: DataTypes.STRING,
    type_of_consultation: DataTypes.STRING,
    chief_complaints: DataTypes.STRING,
    diagnosis: DataTypes.TEXT,
    medication: DataTypes.TEXT,
    laboratory_findings: DataTypes.TEXT,
    health_care_provider: DataTypes.STRING,
    performed_laboratory_test: DataTypes.STRING
  }, {});
  general_treatments.associate = function(models) {
    // associations can be defined here
  };
  return general_treatments;
};