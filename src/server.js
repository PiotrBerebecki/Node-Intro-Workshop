var http = require('http');
var router = require('./router/router');

var port = 4000;

var server = http.createServer(router);

server.listen(port);

console.log("server listening up and running on port:", port);
