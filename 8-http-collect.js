var http = require('http');
var url = process.argv[2];

http.get(url, function(response){

  response.setEncoding('utf-8');
  var res = '';
  response.on('data', function(data){
    res = res + data;
  });

  response.on('end', function(data) {
    console.log(res.length);
    console.log(res);
  })
});
