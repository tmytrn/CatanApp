"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
      .createTable("tiles", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        resource_type: {
          type: Sequelize.STRING,
          allowNull: false
        }
      })
      .then(() => {
        return queryInterface.bulkInsert(
          "tiles",
          [
            { resource_type: "desert" },
            { resource_type: "brick" },
            { resource_type: "brick" },
            { resource_type: "brick" },
            { resource_type: "lumber" },
            { resource_type: "lumber" },
            { resource_type: "lumber" },
            { resource_type: "lumber" },
            { resource_type: "ore" },
            { resource_type: "ore" },
            { resource_type: "ore" },
            { resource_type: "sheep" },
            { resource_type: "sheep" },
            { resource_type: "sheep" },
            { resource_type: "sheep" },
            { resource_type: "wheat" },
            { resource_type: "wheat" },
            { resource_type: "wheat" },
            { resource_type: "wheat" }
          ]
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tiles");
  }
};
