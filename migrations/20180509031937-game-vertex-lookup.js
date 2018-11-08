"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
      .createTable("game_vertex_lookup", {
        x: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        y: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        port_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      })
      .then(() => {
        return queryInterface.bulkInsert("game_vertex_lookup", [
          { x: 0, y: 5, port_id: 0 },
          { x: 0, y: 6, port_id: 0 },
          { x: 1, y: 3, port_id: 9 },
          { x: 1, y: 4, port_id: 9 },
          { x: 1, y: 7, port_id: 0 },
          { x: 1, y: 8, port_id: 8 },
          { x: 2, y: 1, port_id: 1 },
          { x: 2, y: 2, port_id: 0 },
          { x: 2, y: 5, port_id: 0 },
          { x: 2, y: 6, port_id: 0 },
          { x: 2, y: 9, port_id: 0 },
          { x: 2, y: 10, port_id: 7 },
          { x: 3, y: 0, port_id: 1 },
          { x: 3, y: 3, port_id: 0 },
          { x: 3, y: 4, port_id: 0 },
          { x: 3, y: 7, port_id: 0 },
          { x: 3, y: 8, port_id: 0 },
          { x: 3, y: 11, port_id: 7 },
          { x: 4, y: 1, port_id: 0 },
          { x: 4, y: 2, port_id: 0 },
          { x: 4, y: 5, port_id: 0 },
          { x: 4, y: 6, port_id: 0 },
          { x: 4, y: 9, port_id: 0 },
          { x: 4, y: 10, port_id: 0 },
          { x: 5, y: 0, port_id: 2 },
          { x: 5, y: 3, port_id: 0 },
          { x: 5, y: 4, port_id: 0 },
          { x: 5, y: 7, port_id: 0 },
          { x: 5, y: 8, port_id: 0 },
          { x: 5, y: 11, port_id: 6 },
          { x: 6, y: 1, port_id: 2 },
          { x: 6, y: 2, port_id: 0 },
          { x: 6, y: 5, port_id: 0 },
          { x: 6, y: 6, port_id: 0 },
          { x: 6, y: 9, port_id: 0 },
          { x: 6, y: 10, port_id: 6 },
          { x: 7, y: 0, port_id: 0 },
          { x: 7, y: 3, port_id: 0 },
          { x: 7, y: 4, port_id: 0 },
          { x: 7, y: 7, port_id: 0 },
          { x: 7, y: 8, port_id: 0 },
          { x: 7, y: 11, port_id: 0 },
          { x: 8, y: 1, port_id: 0 },
          { x: 8, y: 2, port_id: 3 },
          { x: 8, y: 5, port_id: 0 },
          { x: 8, y: 6, port_id: 0 },
          { x: 8, y: 9, port_id: 5 },
          { x: 8, y: 10, port_id: 0 },
          { x: 9, y: 3, port_id: 3 },
          { x: 9, y: 4, port_id: 0 },
          { x: 9, y: 7, port_id: 0 },
          { x: 9, y: 8, port_id: 5 },
          { x: 10, y: 5, port_id: 4 },
          { x: 10, y: 6, port_id: 4 },
          

          // DO MORE
        ]);
      });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_vertex_lookup");
  }
};

