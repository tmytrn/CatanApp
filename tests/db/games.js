require('dotenv').config();
const db = require('../../db');

// db.games.createGame()
//  .then( data => console.log('createGame Test: ' + data.id))
//  .catch( error => console.log("createGame" + error));
//
//
// db.games.getGames()
// .then (data => {
//                 console.log('getGames Test: ');
//                 data.forEach( (game) => console.log(game.game_id))
//       })
// .catch( error => console.log("getGames" + error));
//
// db.games.getPlayerCount(2).
// then (data => console.log('getPlayerCount Test:' + data.count))
// .catch(error => console.log('getPlayerCount' + error));
//
// db.games.addPlayer(1,1,3,'Y')
// .then(data => console.log('addPlayer Test' + data.id))
// .catch(error => console.log('addPlayer' + error ));
//
// db.games.addVertex(1,1)
// .then( data => console.log('addVertex Test' + data.id))
// .catch( error => console.log('addVertex error' + error));
//
// db.games.addVertex(2,1,true)
// .then( data => console.log('addVertex Test #2' + data.id))
// .catch( error => console.log('addVertex #2 error ' + error));
//
// db.games.addPortToVertex(1,1,'wool')
// .then( data => console.log('addPort Test success'))
// .catch( error => console.log('addPort Error ' + error));
//
// db.games.moveRobber(2,1)
// .then( data => console.log('moveRobber Test success' + data))
// .catch( error => console.log('moveRobber Error' + error));;

// db.games.findVertexId(1,1)
// .then(data => console.log('vertex id' + data.id))
// .catch( error => console.log('findVertexId ERROR ' + error));
//
// db.games.getVertices(1)
// .then( data => console.log( data))
// .catch( error => console.log('getVertices Error' + error));;;
//
// db.games.getRoads(1)
// .then(data => console.log(data))
// .catch( error => console.log('getRoads error' + error ));

db.games.createGame("zeeee", 4)
.then(data => console.log(data))
.catch( error => console.log(error));
