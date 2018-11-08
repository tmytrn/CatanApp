"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("game_vertices", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      x: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      y: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      item: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      port_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_vertices");
  }
};
