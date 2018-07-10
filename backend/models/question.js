'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    userId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    like: DataTypes.INTEGER,
  });

  question.associate = (models) => {
    question.hasMany(models.answer, {
      foreignKey: 'questionId',
      as: 'answers',
    });
    question.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return question;
};