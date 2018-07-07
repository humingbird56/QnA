'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });
    user.associate = (models) => {
      user.hasMany(models.question, {
        foreignKey: 'userId',
        as: 'questions',
      });
      user.hasMany(models.answer, {
        foreignKey: 'userId',
        as: 'answers',
      });
  };
  return user;
};