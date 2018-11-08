'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'game_resources',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        vertex_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        dice_number: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        resource: {
          type: Sequelize.STRING,
          allowNull: false
        },
        game_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
     }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Game_Resources');
  }
};
