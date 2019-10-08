'use strict';
module.exports = (sequelize, DataTypes) => {
  const patients = sequelize.define('patients', {
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    suffix: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    sex: DataTypes.STRING,
    residential_address: DataTypes.STRING,
    birthday: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    civil_status: DataTypes.STRING,
    educational_attainment: DataTypes.STRING,
    employment_status: DataTypes.STRING,
    family_member: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    facility_household_number: DataTypes.STRING,
    philhealth_member: DataTypes.STRING,
    status_type: DataTypes.STRING,
    philhealth_no: DataTypes.STRING,
    category: DataTypes.STRING,
    family_id: DataTypes.INTEGER
  }, {});
  patients.associate = function(models) {
    // associations can be defined here
  };
  return patients;
};