'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'players',
            {
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                game_id: {
                    type: Sequelize.INTEGER,
                    foreignKey: 'id_game',
                    allowNull: false,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    unique: true
                },
                turn_order: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                current_turn: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false
                }
            }
        );
    },
    down: (queryInterface, Sequelize) => {
       return queryInterface.dropTable('Players');
    }
};
