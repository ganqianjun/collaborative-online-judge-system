var express = require('express');
var app = express();
var restRouter = require('./routes/rest.js');

app.use('/api/v1', restRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
