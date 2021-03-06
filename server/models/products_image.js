'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products_Image.init({
    filename: DataTypes.STRING,
    filesize: DataTypes.STRING,
    filetype: DataTypes.STRING,
    primary: DataTypes.BOOLEAN,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products_Image',
  });
  return Products_Image;
};