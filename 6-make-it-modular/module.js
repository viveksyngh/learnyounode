var path = require('path');
var fs = require('fs');

module.exports = function (directory, ext, callback) {

  fs.readdir(directory, function(err, data) {
    if(err) {
      return callback(err);
    }

    var res = data.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });

    callback(null, res);
  });
};
