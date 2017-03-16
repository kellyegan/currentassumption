/*jslint node:true */

var express = require('express');
var app = express();

var assumptions = [
  {
    assumption: "Change is inevitable.",
    date: "2017-03-16T00:48:08.307Z",
    author: "kellyegan"
  },
  {
    assumption: "Uncertainty is certain.",
    date: "2017-03-16T00:50:01.706Z",
    author: "kellyegan"
  }
];

app.use(function (request, response, next) {
  console.log(`${request.method} request for '${request.url}'`);
  next();
});

app.use(express.static('public'));

app.get("/assumptions", function (request, response) {
  response.json(assumptions);
});

app.listen(3000, function () {
  'use strict';
  console.log("Current assumption site listening on port 3000");
});

module.exports = app;
