'use strict';
module.exports = (sequelize, DataTypes) => {
  const maternal_treatments = sequelize.define('maternal_treatments', {
    patient_id: DataTypes.INTEGER,
    consulation_date: DataTypes.DATE,
    last_mestruation_date: DataTypes.DATE,
    blood_pressure: DataTypes.STRING,
    temperature: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    expected_date: DataTypes.DATE,
    attending_provider: DataTypes.STRING,
    diagnosis_date: DataTypes.DATE,
    type_of_delivery: DataTypes.STRING,
    birth_outcome: DataTypes.STRING,
    number_of_children: DataTypes.STRING,
    pregnancy_condition: DataTypes.STRING,
    medical: DataTypes.TEXT,
    lab_findings: DataTypes.TEXT,
    health_care_provider: DataTypes.STRING,
    performed_laboratory_test: DataTypes.STRING
  }, {});
  maternal_treatments.associate = function(models) {
    // associations can be defined here
  };
  return maternal_treatments;
};