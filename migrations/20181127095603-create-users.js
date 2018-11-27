'use strict';
module.exports = {
  up: (queryInterface, { INTEGER, STRING, BOOLEAN, DATE }) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      name: {
        type: STRING
      },
      email: {
        type: STRING
      },
      is_active: {
        type: BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: DATE
      },
      updatedAt: {
        allowNull: false,
        type: DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};