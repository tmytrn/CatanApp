'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buildings',{
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        player_id: Sequelize.INTEGER,
        building_type: Sequelize.STRING
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Buildings');
  }
};
