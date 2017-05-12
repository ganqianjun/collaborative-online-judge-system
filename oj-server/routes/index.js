var express = require('express')
var router = express.Router();

var path = require('path');
router.get('/', function(req, res) {
  // send index.html file to start
  res.sendFile( 'index.html', {
    root: path.join(__dirname, '../../production')
  });
})
module.exports = router;
