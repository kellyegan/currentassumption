/*jslint node:true */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  'use strict';
  console.log("Current assumption site listening on port 3000");
});

module.exports = app;
