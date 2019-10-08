'use strict';
module.exports = (sequelize, DataTypes) => {
  const families = sequelize.define('families', {
    serial_number: DataTypes.STRING,
    family_name: DataTypes.STRING,
    address: DataTypes.STRING,
    no_of_members: DataTypes.INTEGER
  }, {});
  families.associate = function(models) {
    // associations can be defined here
  };
  return families;
};