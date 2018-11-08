module.exports = db => {
    const buildingFunctions = {};

    const validateSettlementPlacement = (x,y,gameId) =>{
      return Promise.all([db.games.getVertexOwner(x,y,gameId)
                        ,db.games.getItemCount(gameId)
                        ,db.games.getPlayerLimit(gameId)])
    };

    const validateRoadPlacement = (xStart,yStart,xEnd,yEnd) => {

    };

    const subtractResource = (userId,gameId,type,amount) =>{
      return db.players.getResourceCount(userId,gameId,type)
        .then(({count}) => {
          if(count >= amount){
            return db.players.updateResources(userId,gameId,type,-amount);
          }else{
            throw "Not enough resources";
          }
        })
    };

    const firstPhaseBuilding = (gameId,userId) => {
      return Promise.all([db.games.getItemCount(gameId),
                          db.games.getPlayerLimit(gameId),
                          db.players.getSettlementCount(userId,gameId)])
      .then(([items,players,settlement]) => {
        const {count: itemCount} = items;
        const {player_limit: playerLimit} = players;
        const {count: settlementCount} = settlement;
        if(itemCount >= (playerLimit * 2) || settlementCount >= 2){
          return false;
        }else{
          return true;
        }
      }).catch( (error) => console.log(error));
    };

    const firstPhaseRoadBuilding = (gameId,userId) => {
      return Promise.all([db.games.getRoadCount(gameId),
                          db.games.getPlayerLimit(gameId),
                          db.players.getRoadCount(userId,gameId)])
        .then(([roads,players,playerRoads]) => {
          const {player_limit: playerLimit} = players;
          const {count: playerRoadCount} = playerRoads;
          const {count: roadCount} = roads;
          if(roadCount >= (playerLimit *2) || playerRoadCount >= 2){
            return false;
          }else{
            return true;
          }
        }).catch( (error) => console.log(error));
    };

    const buildSettlement = (userId,gameId,x,y,buildingType,firstPhase) => {
      if (firstPhase){
        return db.players.buildBuilding(userId,gameId,x,y,buildingType)
      }else{
        return Promise.all([subtractResource(userId,gameId,'BRICK',1)
                                ,subtractResource(userId,gameId,'LUMBER',1)
                                ,subtractResource(userId,gameId,'WOOL',1)
                                ,subtractResource(userId,gameId,'WHEAT',1)])
      .then( () => db.players.buildBuilding(userId,gameId,x,y,buildingType))
      }
    }

    const buildCity = (userId,gameId,x,y,buildingType) => {
      return Promise.all([subtractResource(userId,gameId,'ORE',3)
                                ,subtractResource(userId,gameId,'WHEAT',2)])
      .then( () => db.players.buildBuilding(userId,gameId,x,y,buildingType))
    }

    buildingFunctions.buildStructure = (userId,gameId,x,y,buildingType) => {
      if(buildingType.toUpperCase() === "SETTLEMENT"){
        return firstPhaseBuilding(gameId,userId)
                .then( isFirstPhase => buildSettlement(userId,gameId,x,y,buildingType,isFirstPhase))
      }else{
        return buildCity(userId,gameId,x,y,buildingType);
      }
    };

    buildingFunctions.buildRoad = (userId,gameId,xStart,yStart,xEnd,yEnd) => {
      //TODO finish validation
      return firstPhaseRoadBuilding(gameId,userId)
        .then( (isFirstPhase) => {
          if( isFirstPhase ){
              return db.players.buildRoad(userId,gameId,xStart,yStart,xEnd,yEnd)
          }else{
            return Promise.all([subtractResource(userId,gameId,'BRICK',1)
                                  ,subtractResource(userId,gameId,'LUMBER',1)])
            .then( () => db.players.buildRoad(userId,gameId,xStart,yStart,xEnd,yEnd))
          }
        })
    };

    return buildingFunctions;
}
