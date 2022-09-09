'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodataGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.listGame)
    }
  }
  biodataGame.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    levelAccount: DataTypes.INTEGER,
    listGameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'biodataGame',
  });
  return biodataGame;
};