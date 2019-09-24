'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true
      }
    },
    role:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    username:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};