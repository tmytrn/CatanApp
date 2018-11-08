"use strict";


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ports", {
      createdAt: Sequelize.DATE,
      /*
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.fn('NOW')
                */
      updatedAt: Sequelize.DATE,
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      resources_in_required: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      resources_out_required: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      resource_in_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resource_out_type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
    //var allShips = ["3for1", "3for1", "3for1", "3for1", "wheat", "ore", "lumber", "brick", "sheep"];
    .then(()=> {
      return queryInterface.bulkInsert(
        "ports",
        [
          {resources_in_required: 3, resources_out_required: 1, resource_in_type: "any", resource_out_type: "any"},
          {resources_in_required: 2, resources_out_required: 1, resource_in_type: "wheat", resource_out_type: "any"},
          {resources_in_required: 2, resources_out_required: 1, resource_in_type: "ore", resource_out_type: "any"},
          {resources_in_required: 3, resources_out_required: 1, resource_in_type: "any", resource_out_type: "any"},
          {resources_in_required: 2, resources_out_required: 1, resource_in_type: "sheep", resource_out_type: "any"},
          {resources_in_required: 3, resources_out_required: 1, resource_in_type: "any", resource_out_type: "any"},
          {resources_in_required: 3, resources_out_required: 1, resource_in_type: "any", resource_out_type: "any"},
          {resources_in_required: 2, resources_out_required: 1, resource_in_type: "brick", resource_out_type: "any"},
          {resources_in_required: 2, resources_out_required: 1, resource_in_type: "lumber", resource_out_type: "any"},


        ]
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ports");
  }
};
