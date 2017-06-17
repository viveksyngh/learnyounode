var net = require('net');

var server = net.createServer(function(socket) {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    if(month < 10) {
      month = '0' + month
    }
    if(date < 10) {
      date = '0' + date
    }
    if(hours < 10) {
      hours = '0' + hours
    }
    if(minutes < 10) {
      minutes = '0' + minutes
    }
    var full_date = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes;
    // console.log(full_date);
    socket.write(full_date + "\n");
    socket.end();
});

server.listen(process.argv[2]);
