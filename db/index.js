const pgp = require('pg-promise')();
console.log("process.env.DATABASE_URL:" + process.env.DATABASE_URL);
const connection = pgp(process.env.DATABASE_URL);

exports = module.exports;
exports.users = require('./users/')(connection);
exports.games = require('./games/')(connection);
exports.players = require('./players/')(connection);
