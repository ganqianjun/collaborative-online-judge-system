var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var problemService = require('../services/problemService');

var nodeRestClient = require('node-rest-client').Client;
var restClient = new nodeRestClient();

EXECUTOR_SERVER_URL = "http://localhost:5000/builder";

//register remote method
restClient.registerMethod('builder', EXECUTOR_SERVER_URL, 'POST');

// get: /api/v1/problems
router.get('/problems', function(req, res) {
  problemService.getProblems()
    .then( problems => res.json(problems) );
});

// get: /api/v1/problems/:id
router.get('/problems/:id', function(req, res) {
  var id = req.params.id;
  problemService.getProblem(+id)
    .then( problem => res.json(problem) );
});

// post: /api/v1/problems
router.post('/problems', jsonParser, function(req, res) {
  problemService.addProblem(req.body)
    .then(problem => {
      res.json(problem);
    },
    error => {
      res.status(400).send('Problem already exists');
    });
});

// post: /api/v1/builder
router.post('/builder', jsonParser, function(req, res) {
  const userCodes = req.body.userCodes;
  const language = req.body.language;
  console.log('rest.js : codes - ' + userCodes + ' ; language - ' + language);
  restClient.methods.builder(
    {
      data: {
        code: userCodes,
        language: language
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }, (data, response) => {
      // data is the callback result
      console.log('rest.js - Received from execution server : ' + JSON.stringify(data));
      const text = `Build Output : ${data['build']}
      Execute Output: ${data['run']}`;
      data['text'] = text; // add text to data
      res.json(data);
    }
  );
});

module.exports = router;
