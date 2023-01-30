"use strict";

var express = require("express");

var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
var SECRET_WORDS = ["WORLD", "BOARD", 'FLOOR', 'DREAM', 'GREEN'];
var USERS = [{
  username: "avi",
  password: "111"
}, {
  username: "ben",
  password: "222"
}, {
  username: "cadi",
  password: "333"
}];
app.get("/", function (req, res) {
  res.send("Hello there");
});
app.get("/secretWord", function (req, res) {
  var secretWordIndex = Math.floor(Math.random() * SECRET_WORDS.length);
  res.send(SECRET_WORDS[secretWordIndex]);
});
app.post("/login", function (req, res) {
  var foundUserIndex = USERS.findIndex(function (user) {
    return user.username === req.body.username && user.password === req.body.password;
  });
  res.send(foundUserIndex >= 0 ? "ok" : "invalid user");
});
app.listen(3333, function () {
  console.log("Wordle server listens on port 3333");
});