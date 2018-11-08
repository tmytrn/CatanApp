module.exports = db => {
    const diceFunctions = {};
    const canRollDice = (gameId) => {
      return Promise.all([db.games.getItemCount(gameId),db.games.getPlayerLimit(gameId)])
      .then(([items,players]) => {
        const {count: itemCount} = items;
        const {player_limit: playerLimit} = players;
        if(itemCount >= (playerLimit * 2)){
          return true;
        }else{
          return false;
        }
      }).catch( (error) => console.log(error));
    };

    diceFunctions.rollDice = (gameId) => {
      return canRollDice(gameId)
        .then( rollable => {
          if(rollable){
            const diceRoll = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
            return db.games.rollDice(gameId,diceRoll);
          }else{
            throw "Not Rollable";
          }
        })
    };

    return diceFunctions;
}
