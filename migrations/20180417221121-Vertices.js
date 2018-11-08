'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vertices',{
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        id:{
            type:Sequelize.INTEGER,

            primaryKey: true,
            autoIncrement: true
        },
        vertex_number:{
          type:Sequelize.INTEGER,
          allowNull: false
        },
        game_id: Sequelize.INTEGER,
        port_id: Sequelize.INTEGER,
        robber: Sequelize.BOOLEAN,
        building_id: Sequelize.INTEGER
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vertices');
  }
};
