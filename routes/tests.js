const express = require("express");
const router = express.Router();
const db = require('../db');

router.get("/", (request, response) => {
  db.any(`INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`)
  .then( _ => db.any(`SELECT * FROM test_table`) )
  .then( results => response.json( results ) )
  .catch( error => {
    console.log( error )
    response.json({ error })
  })
});

router.get("/games", (request,response) => {
  // db.games.createGame()
  // .then( data => console.log(data.id))
  // .catch( error => console.log("createGame" + error));

  db.games.getGames()
  .then (data => data.forEach( (game) => console.log(game.game_id)))
  .catch( error => console.log("getGames" + error));
  response.json("RAN TESTS");
})

module.exports = router;
