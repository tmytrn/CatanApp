'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games',{
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      game_name: {
        type: Sequelize.STRING,
        unique:true
      },
      player_limit:{
          type: Sequelize.INTEGER,
          allowNull: false
      },
      dice_roll: {
        type:Sequelize.INTEGER,
        defaultValue: 0
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};
