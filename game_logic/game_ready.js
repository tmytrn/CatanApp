const gameReady = db => (request,response,next) => {
  const {id:gameId} = request.params;
  Promise.all([db.games.getPlayerCount(gameId),db.games.getPlayerLimit(gameId)])
  .then(([players,game]) => {
      const {player_count: playerCount} = players;
      const {player_limit: playerLimit} = game;
      if(playerCount == playerLimit){
        next();
      }else{
        response.sendStatus(401);
      }
  })
  .catch(error => console.log(error))
};

module.exports = gameReady;
