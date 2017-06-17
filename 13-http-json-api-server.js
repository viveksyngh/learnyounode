var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var query = parsedUrl.query;

  if (! query.iso) {
    console.log("Paramter ISO is missing");
    res.end("Paramter ISO is missing");
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })

  if(parsedUrl.pathname == '/api/parsetime') {
    var date = new Date(query.iso);
    var data = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds(),
    };
    res.end(JSON.stringify(data));
  }
  else if(parsedUrl.pathname == '/api/unixtime') {
    var date = new Date(query.iso);
    var data = {
        "unixtime": date.getTime(),
    }
    res.end(JSON.stringify(data));
  }
});

server.listen(process.argv[2]);
