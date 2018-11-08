'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'player_resources',
            {
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                player_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                game_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                resource_type: {
                  type: Sequelize.STRING,
                  allowNull:false
                },
                count: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('player_resources');
    }
};
