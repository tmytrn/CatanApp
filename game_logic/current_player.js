const isUserTurn = db => (request,response,next) => {
  const{id: userId} = request.user;
  const{id: gameId} = request.params;
  console.log("userid",userId," gameid",gameId);
  db.players.checkPlayerTurn(userId,gameId)
  .then( () => next())
  .catch( () => response.sendStatus(401));
};

module.exports = isUserTurn
