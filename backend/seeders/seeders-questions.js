'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('questions', [
    {
      question : 'Who am I',
      userId : 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    },], {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('questions', [
      {
        question : 'Who am I',
        userId : 1,
        createdAt : new Date(),
        updatedAt : new Date(),
      },], {});
  },
};
