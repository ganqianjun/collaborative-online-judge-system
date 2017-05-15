var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds133249.mlab.com:33249/coj-ganqianjun');

var restRouter = require('./routes/rest.js');
var indexRouter = require('./routes/index.js');

var path = require('path');
app.use( express.static( path.join( __dirname, '../production' ) ));

app.use('/', indexRouter);

app.use('/api/v1', restRouter);

app.use( function(req, res, next) {
  res.sendFile( 'index.html', {
    root: path.join( __dirname, '../production' )
  })
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);

// create http server and add io to it
var server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  throw error;
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
