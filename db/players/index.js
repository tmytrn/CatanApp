module.exports = (db) => {
  const playerFunctions = {};

  playerFunctions.findPlayerGame = (userId) => {
    return db.one('SELECT game_id FROM "players" WHERE user_id = $1',
                  [userId]);
  }

  playerFunctions.findPlayerId = (userId) => {
    return db.one('SELECT id FROM "players" WHERE user_id = $1',[userId]);
  }

  playerFunctions.addDevCard = (userId, gameId, devCard) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) =>
      db.none('INSERT INTO "dev_cards" (player_id,game_id,dev_card_type)' +
                  'VALUES ($1,$2,$3)', [id,gameId,devCard])
    )
  }

  playerFunctions.addResource = (userId,gameId,type,count) => {
    return playerFunctions.findPlayerId(userId)
      .then( ({id}) =>
        db.one('INSERT INTO "player_resources" (player_id,game_id,resource_type,count) '
                  + 'VALUES ($1,$2,$3,$4) RETURNING id', [id,gameId,type,count])
      )
  }

  playerFunctions.getResources = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
      .then( ({id}) =>
        db.any('SELECT resource_type, count FROM "player_resources" '
                  + 'WHERE player_id = $1 AND game_id = $2 ORDER BY resource_type',[id,gameId])
    )
  }

  playerFunctions.getResourcesRandom = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
      .then( ({id}) =>
        db.any('SELECT resource_type, count FROM "player_resources" '
                  + 'WHERE player_id = $1 AND game_id = $2 ORDER BY random()',[id,gameId])
    )
  }

  playerFunctions.getResourceCount = (userId,gameId,type) => {
    return playerFunctions.findPlayerId(userId)
      .then( ({id}) =>
        db.one('SELECT count FROM "player_resources" '
                  + 'WHERE player_id = $1 AND game_id = $2 AND UPPER(resource_type) = UPPER($3)'
                  +' ORDER BY resource_type',[id,gameId,type])
    )
  }
  playerFunctions.getDevCards = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
      .then( ({id}) =>
        db.any('SELECT dev_card_type, COUNT(*) FROM dev_cards'
              +' WHERE game_id = $1 AND player_id = $2'
              +' GROUP BY dev_card_type'
              +' ORDER BY dev_card_type'
              ,[gameId,id])
    )
  }

  playerFunctions.updateResources = (userId,gameId,type,additional) =>{
    return playerFunctions.findPlayerId(userId)
      .then( ({id}) =>
        db.none('UPDATE "player_resources" SET count = count + $1'
                  +' WHERE player_id = $2' +
                    'AND game_id = $3'
                    +'AND UPPER(resource_type) = UPPER($4)',
                    [additional,id,gameId,type])
    )
  }

  playerFunctions.updateAllResources = (queries) => {
    return db.task( t => {
      return t.batch(queries);
    });
  };

  playerFunctions.buildBuilding = (userId,gameId,x_cord,y_cord,buildingType) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) =>
      db.none('UPDATE game_vertices SET user_id = $1, item = $2'
                    +'WHERE x = $3 AND y = $4 AND game_id = $5',
                    [id,buildingType,x_cord,y_cord,gameId])
    )
  }

  playerFunctions.buildRoad = (userId,gameId,xStart,yStart,xEnd,yEnd) =>{
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) => db.none('UPDATE game_edges SET user_id = $1, road = $2'
            +' WHERE game_id = $3 AND x_start = $4 AND y_start = $5 AND x_end = $6 AND y_end = $7'
            , [id,true,gameId,xStart,yStart,xEnd,yEnd])
    )
  }

  playerFunctions.getOwnedRoads = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) => db.many('SELECT x_start,y_start,x_end,y_end'
        +'FROM game_edges WHERE player_id = $1 AND game_id = $2'
        ,[id,gameId])
    )
  }

  playerFunctions.getPorts = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) => db.any('SELECT resources_in_required,resources_out_required, UPPER(resource_in_type),UPPER(resource_out_type)'
            +' FROM game_vertices INNER JOIN ports on ports.id = game_vertices.port_id'
            +' WHERE game_id = $1 AND player_id = $2'
            ,[gameId,id])
    )
  }

  playerFunctions.checkPlayerTurn = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) => db.one('SELECT * FROM players WHERE id = $1 AND current_turn = $2', [id,true]));
  }

  playerFunctions.getUpdateableVertices = (gameId,diceRoll) => {
    return db.any('SELECT resource_type,user_id,item FROM game_vertices '
     + 'INNER JOIN  tile_vertex_lookup ON x=affected_x_pos AND y= affected_y_pos '
     + 'INNER JOIN game_tiles ON game_tile_order = game_tiles.order '
     + 'INNER JOIN tiles ON tiles.id = game_tiles.tile_id '
     + 'WHERE die_number = $1 AND item != $2 AND user_id != $3 AND game_vertices.game_id = $4 '
     + 'AND robber = $5'
    , [diceRoll,'empty', 0, gameId, false])
  }

  playerFunctions.getSettlementCount = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) => db.one('SELECT count(*) AS count FROM game_vertices WHERE game_id = $1 AND item != $2 AND user_id = $3'
            ,[gameId,'empty',id]))
  };

  playerFunctions.getRoadCount = (userId,gameId) => {
    return playerFunctions.findPlayerId(userId)
    .then( ({id}) => db.one('SELECT count(*) AS count FROM game_edges WHERE game_id = $1 AND road = $2 AND user_id = $3'
            ,[gameId,true,id]))
  };

  playerFunctions.getUserTotalResources = (gameId) => {
    return db.any('SELECT user_id,pr.count FROM players INNER JOIN '
       +'         (SELECT SUM(count) AS count,player_id FROM player_resources '
       +'           WHERE game_id = $1 GROUP BY player_id) pr'
       +' ON players.id = pr.player_id '
            ,[gameId]);
  }
  return playerFunctions;
}
