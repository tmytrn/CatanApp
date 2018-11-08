"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("game_tiles", {
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tile_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      die_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      robber: {
        type:Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("game_tiles");
  }
};
