const express = require("express");
const router = express.Router();
const authenticate = require("../authentication/authenticated");

router.use(authenticate);

router.post("/:namespace", function(req, res, next) {
  const { namespace } = req.params;
  const { message, gameId } = req.body;
  const io = req.app.get("io");
  if (gameId === undefined) {
    io
      .of(namespace)
      .emit(`chat-${namespace}`, { msg: message, user: req.user.username });
  } else {
    console.log(namespace);
    io
      .of(namespace)
      .emit(`chat-${namespace}-${gameId}`, { msg: message, user: req.user.username });
  }

  res.sendStatus(200);
});


module.exports = router;
