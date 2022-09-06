'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historyGame extends Model {
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
  historyGame.init({
    update: DataTypes.TEXT,
    version: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    listGameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'historyGame',
  });
  return historyGame;
};