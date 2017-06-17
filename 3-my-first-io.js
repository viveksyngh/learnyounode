var fs = require('fs');
var file_path = process.argv[2];
var content = fs.readFileSync(file_path);
var contentString = content.toString();
var lines = contentString.split('\n');
console.log(lines.length - 1);
