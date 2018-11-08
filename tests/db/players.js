require('dotenv').config();
const db = require('../../db');

db.players.addDevCard(3,1,'KNIGHT')
.catch(error => console.log('addDevCard' + error));

db.players.findPlayerId(1)
.then(data => console.log('findPlayerId test' + data.id))
.catch(error => console.log('findPlayerId' + error));

db.players.findPlayerGame(1)
.then(data => console.log('findPlayerGame' + data.game_id))
.catch(error => console.log('findPlayerGame' + error));

db.players.addResource(3,1,'brick',5)
.then(data => console.log('addResource' + data))
.catch(error => console.log('addResource ERROR' + error));

db.players.getResources(3,1)
.then(data => console.log(data))
.catch(error => console.log('getResources ERROR' + error));

db.players.updateResources(3,1,'brick',5)
.then(data => console.log('updateResource' + data))
.catch(error => console.log('updateResource ERROR' + error));

db.players.updateResources(3,1,'brick',-10)
.then(data => console.log('updateResource' + data))
.catch(error => console.log('updateResource ERROR' + error));

db.players.buildBuilding(3,'house',1,1)
.then(data => console.log('buildBuilding' + data))
.catch( error => console.log('buildBuilding ERROR   ' + error));

db.players.buildRoad(1,1,10,9)
.then(data => console.log('buildRoad' + data))
.catch( error => console.log('buildRoad ERROR   ' + error));

db.players.getOwnedRoads(1,1)
.then(data => console.log(data))
.catch( error => console.log('getOwnedRoads ERROR   ' + error));;
