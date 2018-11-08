module.exports = db => {
  const devCardFunctions = {};

  const subtractResource = (userId,gameId,type,amount) =>{
    return db.players.getResourceCount(userId,gameId,type)
      .then(({count}) => {
        console.log(count,amount,type,count<amount);
        if(count >= amount){
          return db.players.updateResources(userId,gameId,type,-amount);
        }else{
          throw "Not enough resources";
        }
      })
  };

  devCardFunctions.buyDevCard = (userId,gameId) => {
    const draw = Math.ceil(Math.random() * 25);
    let cardType = "";
    if(draw < 15){cardType = "KNIGHT"}
    else if(draw <= 16){cardType = "ROAD_BUILDING"}
    else if(draw <= 18){cardType = "MONOPOLY"}
    else if(draw <= 20){cardType = "PLENTY"}
    else{cardType = "VICTORY_POINTS"}
    return Promise.all([subtractResource(userId,gameId,'LUMBER',1)
                      ,subtractResource(userId,gameId,'BRICK',1)])
    .then(() =>  db.players.addDevCard(userId,gameId,cardType));
  };

  return devCardFunctions;
}
