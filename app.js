if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const passport = require("passport");
const session = require("express-session");

const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const index = require("./routes/index");
const users = require("./routes/users");
const tests = require("./routes/tests");
const register = require("./routes/register");
const lobby = require("./routes/lobby");
const game = require("./routes/game");
const chat = require("./routes/chat");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//for passport, username and password authentication
app.use(
  session({
    secret: "catan",
    resave: "true",
    saveUninitialized: "true",
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Define routes
app.use("/", index);
app.use("/users", users);
app.use("/tests", tests);
app.use("/register", register);
app.use("/lobby", lobby);
app.use("/game", game);
app.use("/chat", chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
