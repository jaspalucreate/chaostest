'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("users",[{
      name: "Jaspal Singh",
      email: "jaspal@ucreate.co.in",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Amritpal Singh",
      email: "amrit@ucreate.co.in",
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null,{});
  }
};
