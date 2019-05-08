'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.INTEGER
      },
      superPower: {
        type: Sequelize.STRING
      },
      skillOne: {
        type: Sequelize.STRING
      },
      skillTwo: {
        type: Sequelize.STRING
      },
      enhancedAbilityOne: {
        type: Sequelize.STRING
      },
      enhancedAbilityTwo: {
        type: Sequelize.STRING
      },
      enhancedAbilityThree: {
        type: Sequelize.STRING
      },
      introduction: {
        type: Sequelize.STRING
      },
      childhood: {
        type: Sequelize.STRING
      },
      training: {
        type: Sequelize.STRING
      },
      career: {
        type: Sequelize.STRING
      },
      accomplishments: {
        type: Sequelize.STRING
      },
      family: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Characters');
  }
};