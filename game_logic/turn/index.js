module.exports = db => {
  const turnFunctions = {};

  turnFunctions.updatePlayerTurn = (gameId) => {
    return Promise.all([db.games.getCurrentPlayerTurn(gameId),db.games.getPlayerLimit(gameId)])
    .then(([playerTurn, game]) => {
      const turnOrder = (playerTurn.turn_order % game.player_limit) + 1;
      return db.games.updatePlayerTurn(gameId,turnOrder);
    })
  };

  return turnFunctions;
}
