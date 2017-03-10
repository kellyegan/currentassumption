/*jslint node:true */
var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function (req, res) {
  'use strict';

  if (req.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", function (err, html) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("File not found");
  }

});

server.listen(3000);

