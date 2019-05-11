'use strict';
module.exports = (sequelize, DataTypes) => {
  const Characters = sequelize.define('Characters', {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    height: DataTypes.FLOAT,
    weight: DataTypes.INTEGER,
    superPower: DataTypes.STRING,
    skillOne: DataTypes.STRING,
    skillTwo: DataTypes.STRING,
    enhancedAbilityOne: DataTypes.STRING,
    enhancedAbilityTwo: DataTypes.STRING,
    enhancedAbilityThree: DataTypes.STRING,
    introduction: DataTypes.STRING,
    childhood: DataTypes.STRING,
    training: DataTypes.STRING,
    career: DataTypes.STRING,
    accomplishments: DataTypes.STRING,
    family: DataTypes.STRING,
    fileName: DataTypes.STRING,
  }, {});
  Characters.associate = function(models) {
    // associations can be defined here
  };
  return Characters;
};