module.exports = db => {
  allocationFunctions = {};

  const calculateUpddateAmount = (buildingType) => {
    if(buildingType.toUpperCase() == "SETTLEMENT"){
      return 1;
    }else{
      return 2;
    }
  }

  allocationFunctions.updateResources = (gameId) => {
    db.games.getDiceRoll(gameId)
      .then( (dice) =>{
        console.log(dice)
        return db.players.getUpdateableVertices(1,dice.dice_roll)
      })
      .then( (ownedVertices) => {
          const queries = [];
          ownedVertices.forEach( updateableVertex => {
            let {resource_type: type,
                  user_id: userId,
                  item: building} = updateableVertex;
            let additionalAmount = calculateUpddateAmount(building);
            queries.push(db.players.updateResources(userId,gameId,type, additionalAmount))
          });
          return db.players.updateAllResources(queries);
      })
  }
  return allocationFunctions;
}
