"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("game_edges", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      x_start: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      y_start: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      x_end: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      y_end: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      road: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      order: {
        type:Sequelize.INTEGER,
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_edges");
  }
};
