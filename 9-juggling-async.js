var http = require("http");

var urls = process.argv.slice(2, 5);
var result = new Array(urls.length);
var counter = 0;

for(var i=0; i < urls.length; i++){
  getContent(i, urls[i]);
}

function getContent(i, url){
    http.get(url, function(response){
      response.setEncoding('utf-8');
      var res = '';
      response.on('data', function(data){
        res = res + data;
      });

      response.on('end', function(data){
        result[i] = res;
        counter++;
        if(counter  >= 3) {
          for(var j in result){
            console.log(result[j]);
          }
        }
      });

    });
}
