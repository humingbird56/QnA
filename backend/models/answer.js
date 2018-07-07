'use strict';
module.exports = (sequelize, DataTypes) => {
  var answer = sequelize.define('answer', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    answer: DataTypes.STRING
  });
  
  answer.associate = (models) => {
    answer.belongsTo(models.question, {
      foreignKey: 'questionId',
      onDelete:'CASCADE'
    });
  };
  return answer;
};