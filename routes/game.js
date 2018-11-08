const express = require("express");
const router = express.Router();
const authenticate = require("../authentication/authenticated");
const db = require("../db");
const gameReady = require("../game_logic/game_ready")(db);
const isCurrentPlayer = require("../game_logic/current_player")(db);
const gameLogic = require("../game_logic")(db);

const addPlayer = (userId,gameId) => {
  return db.games.getPlayerCount(gameId)
      .then( (players) => {
        if(players === null){
          return db.games.addPlayer(gameId,userId,1,'Y')
        }
        const {player_count: count, player_limit} = players;
        if(count < player_limit){
          return db.games.addPlayer(gameId,userId,parseInt(count)+1)
        }
      })
};

const addDefaultResources = (userId,gameId) => {
  return Promise.all([ db.players.addResource(userId, gameId, 'WHEAT', 0),
                      db.players.addResource(userId, gameId, 'ORE', 0),
                      db.players.addResource(userId, gameId, 'LUMBER', 0),
                      db.players.addResource(userId, gameId, 'WOOL', 0),
                      db.players.addResource(userId, gameId, 'BRICK', 0)
                    ])
}
const createGame = (gameName,playerLimit,userId) => {
  if(gameName !== undefined && playerLimit !== undefined){
    const gameCreation = db.games.createGame(gameName,playerLimit);
    const playerAddition = gameCreation
                          .then( ({id}) => addPlayer(userId, id));
    return Promise.all([gameCreation,playerAddition]);
  }
};

router.use(authenticate);

router.post("/", function(req, res, next) {
  const {lobby: gameName, playerLimit} = req.body;
  const{id:userId} = req.user;
  createGame(gameName,playerLimit,userId)
    .then( ([game,addPlayer]) => {
        return addDefaultResources(userId,game.id)
        .then( () => res.redirect(`/game/${game.id}`))
    })
    .catch(error => {
      console.log(error);
      res.redirect('lobby');
    });
});

router.post("/join/:id",(request,response,next) => {
  const {id: userId, username } = request.user;
  const {id: gameId} = request.params;
  const playerAddition = addPlayer(userId,gameId);
  const addResources = playerAddition
                      .then( () => addDefaultResources(userId,gameId));

  Promise.all([playerAddition,addResources])
  .then( () => {
    const io = request.app.get("io");
    response.redirect(200,`/game/${gameId}`);
    io.of('game').emit(`message-${gameId}`, {message: `${username} has joined!`});
  })
  .catch( (error) => console.log(error));
});

router.get("/:id", (request, response, next) => {
  const { username, id: userId } = request.user;
  const { id: gameId } = request.params;

  Promise.all([db.games.getGame(gameId),
              db.players.getDevCards(userId ,gameId),
              db.players.getResources(userId,gameId),
              gameLogic.stats.getPlayerStats(gameId)])
  .then(([gameInfo, playerDevCard,playerResources,playerInfo]) => {
    //console.log(Object.assign({}, gameInfo, {playerDevCard},{playerResources}));
    response.render("game", Object.assign({},
                                          gameInfo,
                                          {playerDevCard},
                                          {playerResources},
                                          {playerInfo},
                                          { username, userId }));
  }).catch(error => console.log(error));
});


router.post("/:id/vertex",
      gameReady,
      isCurrentPlayer,
      (request, response, next) => {
  const{id: userId, username} = request.user;
  const{id: gameId} = request.params;
  console.log(request.body);
  const {  x: x,
           y: y,
           item: buildingType} = request.body;
  gameLogic.building.buildStructure(userId, gameId, x, y , buildingType)
  .then( () => {
      const io = request.app.get("io");
      io.of('game').emit(`refresh-board-${gameId}`);
      io.of('game').emit(`message-${gameId}`, {message: `${username} placed a ${buildingType}.`});
      response.sendStatus(200);
    })
  .catch( (error) => {
      console.log(error);
      response.sendStatus(401);
  });

});

router.post("/:id/edge",
      gameReady,
      isCurrentPlayer,
      (request,response,next) => {
  const {id: userId, username} = request.user;
  const {id: gameId} = request.params;
  const {  x_start: xStart,
           y_start: yStart,
           x_end: xEnd,
           y_end: yEnd } = request.body;
  gameLogic.building.buildRoad(userId,gameId,xStart,yStart,xEnd,yEnd)
  .then( () => {
    const io = request.app.get("io");
    io.of('game').emit(`refresh-board-${gameId}`);
    io.of('game').emit(`message-${gameId}`, {message: `${username} placed a road.`});
    response.sendStatus(200);
  })
  .catch( (error) => {
    console.log(error);
    response.sendStatus(401);
  });
});

router.post("/:id/dice",
      gameReady,
      isCurrentPlayer,
      (request,response,next) => {

  const {username} = request.user;
  const {id: gameId} = request.params;
  gameLogic.dice.rollDice(gameId)
  .then( (dice) => {
    const io = request.app.get("io");
      io.of('game').emit(`message-${gameId}`, {message: `${username} rolled a ${dice.dice_roll}.`});
      io.of('game').emit(`diceroll-${gameId}`, dice.dice_roll);
      if(dice.dice_roll == 7){
        io.of('game').emit(`robber-${gameId}`);
      }
  }).then(()=>{
    gameLogic.resourceAllocation.updateResources(gameId);
  })
  .then( () => {
    response.sendStatus(200);
    const io = request.app.get("io");
    io.of('game').emit(`refresh-stats-${gameId}`);
  })
  .catch( (error) => {
    console.log(error);
    response.sendStatus(401);
  });
})

router.post("/:id/buy-devcard",
      gameReady,
      isCurrentPlayer,
      (request,response,next) => {
  const{id: gameId} = request.params;
  const{id: userId} = request.user;
  gameLogic.devCard.buyDevCard(userId,gameId)
  .then( () => response.sendStatus(200))
  .catch( () => response.sendStatus(401));
});

router.post("/:id/play-devcard",
      gameReady, isCurrentPlayer, (request,response,next) => {
  response.sendStatus(200);
});

router.post("/:id/trade-offer",
      gameReady, isCurrentPlayer, (request,response,next) => {
  response.sendStatus(200);
});

router.post("/:id/trade-reply",
      gameReady, isCurrentPlayer, (request,response,next) => {

  response.sendStatus(200);
});

router.post("/:id/trade",
      gameReady,  isCurrentPlayer, (request,response,next) => {
  response.sendStatus(200);
});

router.post("/:id/move-robber",
    gameReady,
    isCurrentPlayer,
    (request,response,next) => {
  const {id: gameId} = request.params;
  const {tile_order : tileOrder} = request.body;
  //const tileOrder = 5;
  gameLogic.robber.moveRobber(gameId,tileOrder)
  .then( () => {
    response.sendStatus(200)
    const io = request.app.get("io");
    io.of('game').emit(`refresh-board-${gameId}`);
  })
  .catch( (error) => {
    console.log(error);
    response.sendStatus(401);
  })
});

router.post("/:id/endturn",
      gameReady,
      isCurrentPlayer,
      (request,response,next) => {
  const { id: userId,username} = request.user;
  console.log("In routes");
  const {id: gameId} = request.params;
  gameLogic.turn.updatePlayerTurn(gameId)
  .then( () => {
    const io = request.app.get("io");
    io.of('game').emit(`message-${gameId}`, {message: `${username} has ended his turn!`});
    io.of('game').emit(`refresh-stats-${gameId}`);
    response.sendStatus(200);
  })
  .catch( (error) => {
    console.log(error);
    response.sendStatus(401);
  })

});

module.exports = router;
