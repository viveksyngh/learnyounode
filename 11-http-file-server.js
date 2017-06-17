var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' });
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(response);
});

server.listen(process.argv[2]);
