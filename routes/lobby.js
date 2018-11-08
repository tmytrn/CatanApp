var express = require('express');
var router = express.Router();
const authenticate = require('../authentication/authenticated');
const db = require('../db');

router.use(authenticate);

/* GET home page. */
router.get('/', function(request, response, next) {
    console.log('from lobby', request.user);

    db.games.getGames()
    .then ( gameList =>
              {
                const games  = {};
                gameList.forEach( (game) =>
                                {
                                  games[game.id] = game;
                });
                response.render('lobby',
                                {title: 'Express', user: request.user.username, games:games});
    })
    .catch( error => console.log(error));
});

module.exports = router;
