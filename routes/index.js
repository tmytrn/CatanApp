var express = require('express');
var router = express.Router();
const db = require('../db');
const passport = require('../authentication');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', passport.authenticate('local',{failureRedirect: '/'},),
                  function(request,response,next){
                          request.session.save((error) =>{
                            response.redirect('/lobby');
                          });
                  }
);

module.exports = router;