var fs = require('fs');

var file_path = process.argv[2];

fs.readFile(file_path, function(err, data) {
  if(err) {
    console.log("An error occured.");
  }
  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});
