'use strict';
module.exports = (sequelize, DataTypes) => {
  var answer = sequelize.define('answer', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    like: DataTypes.INTEGER,
  });
  
  answer.associate = (models) => {
    answer.belongsTo(models.question, {
      foreignKey: 'questionId',
      onDelete:'CASCADE'
    });
    answer.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return answer;
};