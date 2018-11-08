'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("tile_vertex_lookup",{
      game_tile_order:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      affected_x_pos:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      affected_y_pos:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    }).then( () => {
      return queryInterface.bulkInsert("tile_vertex_lookup",[
      {game_tile_order: 0, affected_x_pos: 3, affected_y_pos: 0},
      {game_tile_order: 0, affected_x_pos: 2, affected_y_pos: 1},
      {game_tile_order: 0, affected_x_pos: 4, affected_y_pos: 1},
      {game_tile_order: 0, affected_x_pos: 2, affected_y_pos: 2},
      {game_tile_order: 0, affected_x_pos: 4, affected_y_pos: 2},
      {game_tile_order: 0, affected_x_pos: 3, affected_y_pos: 3},

      {game_tile_order: 1, affected_x_pos: 5, affected_y_pos: 0},
      {game_tile_order: 1, affected_x_pos: 4, affected_y_pos: 1},
      {game_tile_order: 1, affected_x_pos: 6, affected_y_pos: 1},
      {game_tile_order: 1, affected_x_pos: 4, affected_y_pos: 2},
      {game_tile_order: 1, affected_x_pos: 6, affected_y_pos: 2},
      {game_tile_order: 1, affected_x_pos: 5, affected_y_pos: 3},

      {game_tile_order: 2, affected_x_pos: 7, affected_y_pos: 0},
      {game_tile_order: 2, affected_x_pos: 6, affected_y_pos: 1},
      {game_tile_order: 2, affected_x_pos: 8, affected_y_pos: 1},
      {game_tile_order: 2, affected_x_pos: 6, affected_y_pos: 2},
      {game_tile_order: 2, affected_x_pos: 8, affected_y_pos: 2},
      {game_tile_order: 2, affected_x_pos: 7, affected_y_pos: 3},

      {game_tile_order: 3, affected_x_pos: 2, affected_y_pos: 2},
      {game_tile_order: 3, affected_x_pos: 1, affected_y_pos: 3},
      {game_tile_order: 3, affected_x_pos: 3, affected_y_pos: 3},
      {game_tile_order: 3, affected_x_pos: 1, affected_y_pos: 4},
      {game_tile_order: 3, affected_x_pos: 3, affected_y_pos: 4},
      {game_tile_order: 3, affected_x_pos: 2, affected_y_pos: 5},

      {game_tile_order: 4, affected_x_pos: 4, affected_y_pos: 2},
      {game_tile_order: 4, affected_x_pos: 3, affected_y_pos: 3},
      {game_tile_order: 4, affected_x_pos: 5, affected_y_pos: 3},
      {game_tile_order: 4, affected_x_pos: 3, affected_y_pos: 4},
      {game_tile_order: 4, affected_x_pos: 5, affected_y_pos: 4},
      {game_tile_order: 4, affected_x_pos: 4, affected_y_pos: 5},

      {game_tile_order: 5, affected_x_pos: 6, affected_y_pos: 2},
      {game_tile_order: 5, affected_x_pos: 5, affected_y_pos: 3},
      {game_tile_order: 5, affected_x_pos: 7, affected_y_pos: 3},
      {game_tile_order: 5, affected_x_pos: 5, affected_y_pos: 4},
      {game_tile_order: 5, affected_x_pos: 7, affected_y_pos: 4},
      {game_tile_order: 5, affected_x_pos: 6, affected_y_pos: 5},

      {game_tile_order: 6, affected_x_pos: 8, affected_y_pos: 2},
      {game_tile_order: 6, affected_x_pos: 7, affected_y_pos: 3},
      {game_tile_order: 6, affected_x_pos: 9, affected_y_pos: 3},
      {game_tile_order: 6, affected_x_pos: 7, affected_y_pos: 4},
      {game_tile_order: 6, affected_x_pos: 9, affected_y_pos: 4},
      {game_tile_order: 6, affected_x_pos: 8, affected_y_pos: 5},

      {game_tile_order: 7, affected_x_pos: 1, affected_y_pos: 4},
      {game_tile_order: 7, affected_x_pos: 0, affected_y_pos: 5},
      {game_tile_order: 7, affected_x_pos: 2, affected_y_pos: 5},
      {game_tile_order: 7, affected_x_pos: 0, affected_y_pos: 6},
      {game_tile_order: 7, affected_x_pos: 2, affected_y_pos: 6},
      {game_tile_order: 7, affected_x_pos: 1, affected_y_pos: 7},

      {game_tile_order: 8, affected_x_pos: 3, affected_y_pos: 4},
      {game_tile_order: 8, affected_x_pos: 2, affected_y_pos: 5},
      {game_tile_order: 8, affected_x_pos: 4, affected_y_pos: 5},
      {game_tile_order: 8, affected_x_pos: 2, affected_y_pos: 6},
      {game_tile_order: 8, affected_x_pos: 4, affected_y_pos: 6},
      {game_tile_order: 8, affected_x_pos: 3, affected_y_pos: 7},

      {game_tile_order: 9, affected_x_pos: 5, affected_y_pos: 4},
      {game_tile_order: 9, affected_x_pos: 4, affected_y_pos: 5},
      {game_tile_order: 9, affected_x_pos: 6, affected_y_pos: 5},
      {game_tile_order: 9, affected_x_pos: 4, affected_y_pos: 6},
      {game_tile_order: 9, affected_x_pos: 6, affected_y_pos: 6},
      {game_tile_order: 9, affected_x_pos: 5, affected_y_pos: 7},

      {game_tile_order: 10, affected_x_pos: 7, affected_y_pos: 4},
      {game_tile_order: 10, affected_x_pos: 6, affected_y_pos: 5},
      {game_tile_order: 10, affected_x_pos: 8, affected_y_pos: 5},
      {game_tile_order: 10, affected_x_pos: 6, affected_y_pos: 6},
      {game_tile_order: 10, affected_x_pos: 8, affected_y_pos: 6},
      {game_tile_order: 10, affected_x_pos: 7, affected_y_pos: 7},

      {game_tile_order: 11, affected_x_pos: 9, affected_y_pos: 4},
      {game_tile_order: 11, affected_x_pos: 8, affected_y_pos: 5},
      {game_tile_order: 11, affected_x_pos: 10, affected_y_pos: 5},
      {game_tile_order: 11, affected_x_pos: 8, affected_y_pos: 6},
      {game_tile_order: 11, affected_x_pos: 10, affected_y_pos: 6},
      {game_tile_order: 11, affected_x_pos: 9, affected_y_pos: 7},

      {game_tile_order: 12, affected_x_pos: 2, affected_y_pos: 6},
      {game_tile_order: 12, affected_x_pos: 1, affected_y_pos: 7},
      {game_tile_order: 12, affected_x_pos: 3, affected_y_pos: 7},
      {game_tile_order: 12, affected_x_pos: 1, affected_y_pos: 8},
      {game_tile_order: 12, affected_x_pos: 3, affected_y_pos: 8},
      {game_tile_order: 12, affected_x_pos: 2, affected_y_pos: 9},

      {game_tile_order: 13, affected_x_pos: 4, affected_y_pos: 6},
      {game_tile_order: 13, affected_x_pos: 3, affected_y_pos: 7},
      {game_tile_order: 13, affected_x_pos: 5, affected_y_pos: 7},
      {game_tile_order: 13, affected_x_pos: 3, affected_y_pos: 8},
      {game_tile_order: 13, affected_x_pos: 5, affected_y_pos: 8},
      {game_tile_order: 13, affected_x_pos: 3, affected_y_pos: 9},

      {game_tile_order: 14, affected_x_pos: 6, affected_y_pos: 6},
      {game_tile_order: 14, affected_x_pos: 5, affected_y_pos: 7},
      {game_tile_order: 14, affected_x_pos: 7, affected_y_pos: 7},
      {game_tile_order: 14, affected_x_pos: 5, affected_y_pos: 8},
      {game_tile_order: 14, affected_x_pos: 7, affected_y_pos: 8},
      {game_tile_order: 14, affected_x_pos: 6, affected_y_pos: 9},

      {game_tile_order: 15, affected_x_pos: 8, affected_y_pos: 6},
      {game_tile_order: 15, affected_x_pos: 7, affected_y_pos: 7},
      {game_tile_order: 15, affected_x_pos: 9, affected_y_pos: 7},
      {game_tile_order: 15, affected_x_pos: 7, affected_y_pos: 8},
      {game_tile_order: 15, affected_x_pos: 9, affected_y_pos: 8},
      {game_tile_order: 15, affected_x_pos: 8, affected_y_pos: 9},

      {game_tile_order: 16, affected_x_pos: 3, affected_y_pos: 8},
      {game_tile_order: 16, affected_x_pos: 2, affected_y_pos: 9},
      {game_tile_order: 16, affected_x_pos: 4, affected_y_pos: 9},
      {game_tile_order: 16, affected_x_pos: 2, affected_y_pos: 10},
      {game_tile_order: 16, affected_x_pos: 4, affected_y_pos: 10},
      {game_tile_order: 16, affected_x_pos: 3, affected_y_pos: 11},

      {game_tile_order: 17, affected_x_pos: 5, affected_y_pos: 8},
      {game_tile_order: 17, affected_x_pos: 4, affected_y_pos: 9},
      {game_tile_order: 17, affected_x_pos: 6, affected_y_pos: 9},
      {game_tile_order: 17, affected_x_pos: 4, affected_y_pos: 10},
      {game_tile_order: 17, affected_x_pos: 6, affected_y_pos: 10},
      {game_tile_order: 17, affected_x_pos: 5, affected_y_pos: 11},

      {game_tile_order: 18, affected_x_pos: 7, affected_y_pos: 8},
      {game_tile_order: 18, affected_x_pos: 6, affected_y_pos: 9},
      {game_tile_order: 18, affected_x_pos: 8, affected_y_pos: 9},
      {game_tile_order: 18, affected_x_pos: 6, affected_y_pos: 10},
      {game_tile_order: 18, affected_x_pos: 8, affected_y_pos: 10},
      {game_tile_order: 18, affected_x_pos: 7, affected_y_pos: 11}
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tile_vertex_lookup");
  }
};
