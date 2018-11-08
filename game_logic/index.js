module.exports = db => {
  const gameLogic = {};

  gameLogic.building = require("./building")(db);
  gameLogic.devCard = require("./dev_card")(db);
  gameLogic.resourceAllocation = require("./resource_allocation")(db);
  gameLogic.robber = require("./robber")(db);
  // gameLogic.trade = require("./trade")(db);
  gameLogic.dice = require("./dice")(db);
  gameLogic.turn = require("./turn")(db);
  gameLogic.stats = require("./player_stats")(db);

  return gameLogic;
}
