var express = require('express');
var app = express();
var restRouter = require('./routes/rest.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds133249.mlab.com:33249/coj-ganqianjun');

app.use('/api/v1', restRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
