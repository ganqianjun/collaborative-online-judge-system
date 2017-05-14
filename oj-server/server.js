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
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
