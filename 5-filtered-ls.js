var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var filteredLS = function(dir, ext) {
    fs.readdir(dir, function(err, files) {
      if(err) {
          console.log("An error ocuured");
      }
      for(var i=0; i<files.length; i++){
        if(path.extname(files[i]) == '.' + ext) {
          console.log(files[i]);
        }
      }
    });
};

filteredLS(dir, ext);
