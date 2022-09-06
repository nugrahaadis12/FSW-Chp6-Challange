'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.biodataGame)
    }
  }
  listGame.init({
    nameGame: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'listGame',
  });
  return listGame;
};