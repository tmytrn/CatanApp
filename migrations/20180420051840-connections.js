'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'connections',
            {
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                vertex_start: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                vertex_end: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                player_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                game_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                }
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Connections');
    }
};
