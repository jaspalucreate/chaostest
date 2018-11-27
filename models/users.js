'use strict';
module.exports = (sequelize, { STRING, BOOLEAN }) => {
  const users = sequelize.define('users', {
    name: STRING,
    email: STRING,
    is_active: BOOLEAN
  }, {});
  users.associate = (models) =>{
    // associations can be defined here
  };
  return users;
};