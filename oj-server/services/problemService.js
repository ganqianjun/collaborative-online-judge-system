var ProblemModel = require('../models/problemModel');

var getProblems = function() {
  return new Promise((resolve, reject) => {
    ProblemModel.find( {}, function(err, problems) {
      if (err) {
        reject(err);
      }
      else {
        resolve(problems);
      }
    });
  });
}

var getProblem = function(id) {
  return new Promise((resolve, reject) => {
    ProblemModel.findOne( { id : id }, function(err, problem) {
      if (err) {
        reject(err);
      }
      else {
        resolve(problem);
      }
    });
  });
}

var addProblem = function(newProblem) {
  return new Promise((resolve, reject) => {
    ProblemModel.findOne( {name : newProblem.name }, function(err, data) {
      if (data) {
        reject('Problem already exists');
      }
      else {
        ProblemModel.count( {}, function(err, num) {
          if (err) {
            reject(err);
          }
          else {
            newProblem.id = num + 1;
            var mongoProblem = new ProblemModel(newProblem);
            mongoProblem.save();
            resolve(mongoProblem);
          }
        });
      }
    });
  });
}

module.exports = {
    getProblems: getProblems,
    getProblem: getProblem,
    addProblem: addProblem
}
