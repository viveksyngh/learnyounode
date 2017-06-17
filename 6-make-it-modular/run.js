var filteredLS = require('./module.js');
var dirName = process.argv[2];
var ext = process.argv[3];

function callback(err, data) {
  if(err) {
    console.error("An error occurred " + err);
  }

  data.forEach(function(file){
    console.log(file);
  });
}
filteredLS(dirName, ext, callback);
