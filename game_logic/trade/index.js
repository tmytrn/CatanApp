module.exports = db => {
  const tradeFunctions = {};

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

  const addResource = (userId,gameId,type,amount) => {
    return db.players.updateResources(userId,gameId,type,amount);
  };

  const checkType = (type) => {
    resourceType = type.toUpperCase();
    if( resourceType !== 'WHEAT' || resourceType !== 'ORE'
        || resourceType !== 'WOOL',
        || resourceType !== 'BRICK'
        || resourceType !== 'LUMBER'){
      return true;
    }
    return false;
  };

  tradeFunctions.playerTrade = (offererId, receiverUsername, offerType, offerAmount, receieveType,receiveAmount,gameId) => {
    if(checkType(offerType) && checkType(receiveType)){
      db.users.findByUsername(receieverUsername)
      .then( (user) => Promise.all([subtractResource(offererId,gameId,offerType,offerAmount)
                                    ,addResource(user.id,gameId,receieveType,receiveAmount)])
      .then( () => return true)
      .catch( (error) => {
          console.log(error);
          return false;
      }
      )
    }
    return false;
  };

  tradeFunctions.bankTrade = (userId,gameId,offerType,offerAmount) => {

  }

  return tradeFunctions;
}
