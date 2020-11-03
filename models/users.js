'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
