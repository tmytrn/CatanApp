module.exports = db => {
  const robberFunctions = {};

  const sevenRolled = (gameId) => {
    return db.games.getDiceRoll(gameId)
          .then( (dice) => {
              const {dice_roll: diceRoll} = dice;
              if(diceRoll == 7){
                return true;
              }else{
                return false;
              }
          })
  }

  const halfResources = (userId,gameId,total) => {
    return db.players.getResourcesRandom(userId,gameId)
    .then( resources => {
      let subtractedResources = 0;
      const queries = [];
      resources.forEach( resource => {
        const {resource_type: resourceType, count: resourceCount} = resource;
        let halfOfResource = Math.ceil(resourceCount / 2);
        if(subtractedResources >= Math.floor(total/2)){
          halfOfResource = 0;
        }
        console.log("subtracting", halfOfResource, resourceType, "from", userId, "total",total);
        queries.push(db.players.updateResources(userId,gameId,resourceType,-halfOfResource))
        subtractedResources += halfOfResource;
      })
      return queries;
    })
  };

  const reduceResources = (gameId) => {
    return db.players.getUserTotalResources(gameId)
    .then( users => {
      const queries = [];
      users.forEach( (user) => {
        if(user.count > 7){
          queries.concat(halfResources(user.user_id,gameId,user.count));
        }
      })
      return db.players.updateAllResources(queries);
    })
  };

  robberFunctions.moveRobber = (gameId,tileOrder) => {
    console.log(gameId,tileOrder);
    return sevenRolled(gameId)
      .then( (sevenRolled) => {
        if(sevenRolled){
          return reduceResources(gameId)
        }
          return [];
      })
      .then ( () => db.games.moveRobber(tileOrder,gameId))
  };
  return robberFunctions;
}
