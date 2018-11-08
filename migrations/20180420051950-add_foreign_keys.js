'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('players', ['user_id'],{
                              type: 'foreign key',
                              name: 'player_user_id_fk',
                              references:{
                                  table:'users',
                                  field:'id'
                              }
                            }
            )
            .then( () => queryInterface.addConstraint('player_resources', ['player_id'], {
                              type: 'foreign key',
                              name: 'player_resources_player_id_fk',
                              references:{
                                  table: 'players',
                                  field: 'id'
                                },
                                onDelete:'cascade'
                            }
            ))
            .then( () => queryInterface.addConstraint('player_resources',['game_id'], {
                              type: 'foreign key',
                              name: 'player_resources_game_id_fk',
                              references:{
                                  table: 'games',
                                  field: 'id'
                              },
                                onDelete: 'cascade'
                            }
            ))
            .then( () => queryInterface.addConstraint('buildings',['player_id'],{
                                type: 'foreign key',
                                name: 'buildings_player_id_fk',
                                references: {
                                  table: 'players',
                                  field: 'id'
                                },
                                  onDelete: 'cascade'
                              }
            ))
            .then( () => queryInterface.addConstraint('vertices',['game_id'],{
                                type: 'foreign key',
                                name: 'vertices_game_id_fk',
                                references: {
                                  table: 'games',
                                  field: 'id'
                                },
                                onDelete: 'cascade'
                          }
            ))
            .then( () => queryInterface.addConstraint('vertices',['building_id'],{
                                type: 'foreign key',
                                name: 'vertices_building_id_fk',
                                references: {
                                  table: 'buildings',
                                  field: 'id'
                                },
                                onDelete: 'cascade'
                          }
            ))
            .then( () => queryInterface.addConstraint('vertices',['port_id'],{
                                type: 'foreign key',
                                name: 'vertices_port_id_fk',
                                references: {
                                  table: 'ports',
                                  field: 'id'
                                },
                                onDelete: 'cascade'
                          }
            ))
            .then( () => queryInterface.addConstraint('dev_cards',['game_id'],{
                                type: 'foreign key',
                                name: 'dev_cards_game_id_fk',
                                references: {
                                  table: 'games',
                                  field: 'id'
                                },
                                onDelete: 'cascade'
                          }
            ))
            .then( () => queryInterface.addConstraint('dev_cards',['player_id'],{
                            type: 'foreign key',
                            name: 'dev_cards_player_id_fk',
                            references: {
                                table: 'players',
                                field: 'id'
                            },
                            onDelete: 'cascade'
                          }
            ))
            .then( () => queryInterface.addConstraint('game_resources',['vertex_id'],{
                            type: 'foreign key',
                            name: 'game_resources_vertex_id_fk',
                            references: {
                                table: 'vertices',
                                field: 'id'
                            },
                            onDelete: 'cascade'
                          }
            ))
            .then( () => queryInterface.addConstraint('connections', ['vertex_start'], {
                          type: 'foreign key',
                          name: 'connections_vertex_id_strt_fk',
                          references: {
                              table: 'vertices',
                              field: 'id'
                          },
                          onDelete: 'cascade'
                        }
            ))
            .then( () => queryInterface.addConstraint('connections', ['vertex_end'], {
                          type: 'foreign key',
                          name: 'connections_vertex_id_end_fk',
                          references: {
                              table: 'vertices',
                              field: 'id'
                          },
                          onDelete: 'cascade'
                        }
            ));
  },

  down: (queryInterface, Sequelize) => {

  }
};
