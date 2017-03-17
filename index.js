/*jslint node:true */

var express = require('express');
var bodyParser = require('body-parser');
var assumptions = require("./data/assumptions").data;

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (request, response, next) {
  console.log(`${request.method} request for '${request.url}'`);
  next();
});

app.use(express.static('public'));

//Return recent assumptions
app.get("/assumptions", function (request, response) {
  response.json(assumptions);
});

//Add a new assumption
app.post("/assumptions", function (request, response) {
  assumptions.push({
    date: new Date().toJSON(),
    content: request.body.assumption,
    author: "anonymous"
  });
  response.json(assumptions);
});

app.listen(3000, function () {
  'use strict';
  console.log("Current assumption site listening on port 3000");
});

module.exports = app;
