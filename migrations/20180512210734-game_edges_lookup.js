'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
    .createTable("game_edges_lookup", {
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
      order: {
        type:Sequelize.INTEGER,
        allowNull: false
      }
    })
    .then(() => {
       return queryInterface.bulkInsert
       ("game_edges_lookup",
        [{x_start:2 , y_start:1,  x_end:3, y_end:0,order: 1},
        {x_start:3 , y_start:0,  x_end:4, y_end:1, order: 2},
        {x_start:4 , y_start:1,  x_end:5, y_end:0, order: 3},
        {x_start:5 , y_start:0,  x_end:6, y_end:1, order: 4},
        {x_start:6 , y_start:1,  x_end:7, y_end:0, order: 5},
        {x_start:7 , y_start:0,  x_end:8, y_end:1, order: 6},
        {x_start:2 , y_start:1,  x_end:2, y_end:2, order: 7},
        {x_start:4 , y_start:1,  x_end:4, y_end:2, order: 8},
        {x_start:6 , y_start:1,  x_end:6, y_end:2, order: 9},
        {x_start:8 , y_start:1,  x_end:8, y_end:2, order: 10},
        {x_start:1 , y_start:3,  x_end:2, y_end:2, order: 11},
        {x_start:2 , y_start:2,  x_end:3, y_end:3, order: 12},
        {x_start:3 , y_start:3,  x_end:4, y_end:2, order: 13},
        {x_start:4 , y_start:2,  x_end:5, y_end:3, order: 14},
        {x_start:5 , y_start:3,  x_end:6, y_end:2, order: 15},
        {x_start:6 , y_start:2,  x_end:7, y_end:3, order: 16},
        {x_start:7 , y_start:3,  x_end:8, y_end:2, order: 17},
        {x_start:8 , y_start:2,  x_end:9, y_end:3, order: 18},
        {x_start:1 , y_start:3,  x_end:1, y_end:4, order: 19},
        {x_start:3 , y_start:3,  x_end:3, y_end:4, order: 20},
        {x_start:5 , y_start:3,  x_end:5, y_end:4, order: 21},
        {x_start:7 , y_start:3,  x_end:7, y_end:4, order: 22},
        {x_start:9 , y_start:3,  x_end:9, y_end:4, order: 23},
        {x_start:0 , y_start:5,  x_end:1, y_end:4, order: 24},
        {x_start:1 , y_start:4,  x_end:2, y_end:5, order: 25},
        {x_start:2 , y_start:5,  x_end:3, y_end:4, order: 26},
        {x_start:3 , y_start:4,  x_end:4, y_end:5, order: 27},
        {x_start:4 , y_start:5,  x_end:5, y_end:4, order: 28},
        {x_start:5 , y_start:4,  x_end:6, y_end:5, order: 29},
        {x_start:6 , y_start:5,  x_end:7, y_end:4, order: 30},
        {x_start:7 , y_start:4,  x_end:8, y_end:5, order: 31},
        {x_start:8 , y_start:5,  x_end:9, y_end:4, order: 32},
        {x_start:9 , y_start:4,  x_end:10, y_end:5, order: 33},
        {x_start:0 , y_start:5,  x_end:0, y_end:6, order: 34},
        {x_start:2 , y_start:5,  x_end:2, y_end:6, order: 35},
        {x_start:4 , y_start:5,  x_end:4, y_end:6, order: 36},
        {x_start:6 , y_start:5,  x_end:6, y_end:6, order: 37},
        {x_start:8 , y_start:5,  x_end:8, y_end:6, order: 38},
        {x_start:10 , y_start:5,  x_end:10, y_end:6, order: 39},
        {x_start:0 , y_start:6,  x_end:1, y_end:7, order: 40},
        {x_start:1 , y_start:7,  x_end:2, y_end:6, order: 41},
        {x_start:2 , y_start:6,  x_end:3, y_end:7, order: 42},
        {x_start:3 , y_start:7,  x_end:4, y_end:6, order: 43},
        {x_start:4 , y_start:6,  x_end:5, y_end:7, order: 44},
        {x_start:5 , y_start:7,  x_end:6, y_end:6, order: 45},
        {x_start:6 , y_start:6,  x_end:7, y_end:7, order: 46},
        {x_start:7 , y_start:7,  x_end:8, y_end:6, order: 47},
        {x_start:8 , y_start:6,  x_end:9, y_end:7, order: 48},
        {x_start:9 , y_start:7,  x_end:10, y_end:6, order: 50},
        {x_start:1 , y_start:7,  x_end:1, y_end:8, order: 51},
        {x_start:3 , y_start:7,  x_end:3, y_end:8, order: 52},
        {x_start:5 , y_start:7,  x_end:5, y_end:8, order: 53},
        {x_start:7 , y_start:7,  x_end:7, y_end:8, order: 54},
        {x_start:9 , y_start:7,  x_end:9, y_end:8, order: 55},
        {x_start:1 , y_start:8,  x_end:2, y_end:9, order: 56},
        {x_start:2 , y_start:9,  x_end:3, y_end:8, order: 57},
        {x_start:3 , y_start:8,  x_end:4, y_end:9, order: 58},
        {x_start:4 , y_start:9,  x_end:5, y_end:8, order: 59},
        {x_start:5 , y_start:8,  x_end:6, y_end:9, order: 60},
        {x_start:6 , y_start:9,  x_end:7, y_end:8, order: 61},
        {x_start:7 , y_start:8,  x_end:8, y_end:9, order: 62},
        {x_start:8 , y_start:9,  x_end:9, y_end:8, order: 63},
        {x_start:2 , y_start:9,  x_end:2, y_end:10, order: 64},
        {x_start:4 , y_start:9,  x_end:4, y_end:10, order: 65},
        {x_start:6 , y_start:9,  x_end:6, y_end:10, order: 66},
        {x_start:8 , y_start:9,  x_end:8, y_end:10, order: 67},
        {x_start:2 , y_start:10,  x_end:3, y_end:11, order: 68},
        {x_start:3 , y_start:11,  x_end:4, y_end:10, order: 69},
        {x_start:4 , y_start:10,  x_end:5, y_end:11, order: 70},
        {x_start:5 , y_start:11,  x_end:6, y_end:10, order: 71},
        {x_start:6 , y_start:10,  x_end:7, y_end:11, order: 72},
        {x_start:7 , y_start:11,  x_end:8, y_end:10, order: 73}

      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_edges_lookup");
  }
};
