/*jslint node:true */
var http = require("http");

var server = http.createServer(function (req, res) {
  'use strict';

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Current assumption</title>
      </head>
      <body>
        <h1>Current assumption</h1>
      </body>
    </html>
  `);
});

server.listen(3000);

