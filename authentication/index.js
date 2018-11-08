const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db');
const bcrypt = require("bcrypt");

passport.use(new LocalStrategy(
            (username,password,done) => {
                db.users.findByUsername(username)
                .then( ({id,username,email, password: hash}) => {
                      if(bcrypt.compareSync(password,hash)){
                        return done(null,{id,username,email})
                      }else{
                        return done(null,false);
                      }
                  } )
                .catch( () => done(null,false));

            }
));

passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(userid,done){
  db.users.findByUserId(userid)
   .then( user => {done(null,user);}).
    catch( error => {done(null,false);console.log(error)});

})

module.exports = passport;
