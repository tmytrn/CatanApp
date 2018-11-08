module.exports = db => {
  playerStatFunctions = {};

  const getLongestRoadPlayer = gameId => {
    return db.games.getHighestRoadCount(gameId)
  }

  playerStatFunctions.getPlayerStats = gameId => {
    return Promise.all([getLongestRoadPlayer(gameId)
                      ,db.games.getPlayerInfo(gameId)])
    .then( ([maxRoadPlayer, playerInfo]) => {
      let turnOrder;
      let longestRoadPoint = 1;
      if(maxRoadPlayer.length !== 0){
        turnOrder = maxRoadPlayer[0].turn_order;
      }
      playerInfo.forEach( player => {
        let victoryPoint = parseInt(player.settlment_points) + parseInt(player.city_points);
        if(player.turn_order === turnOrder){
          victoryPoint += longestRoadPoint;
        }
        player.victoryPoint = victoryPoint;
      })
      return playerInfo;
    })
  }

  return playerStatFunctions;
}
