(function() {
  'use strict';

  var routes = {
    createTopic: createTopic,
    getAllTopicsByCohort: getAllTopicsByCohort,
    getTopic: getTopic,
    deleteTopic: deleteTopic
  };

  var Model = require('../db/models/Topic');

  function createTopic(req, res) {
    console.log(req.body);
    new Model.Topic({
        title: req.body.title,
        text: req.body.text,
        votes: req.body.votes,
        author: req.body.author,
        timestamp: new Date(),
        cohort: req.body.cohort
      }).save()
      .then(function(topic) {
        console.log(topic);
        res.send(topic);
      })
      .catch(function(error) {
        console.log(error);
        res.send(error);
      });
  }

  function getAllTopicsByCohort(req, res) {
    var cohort = req.params.cohort;
    new Model.Topic().where('cohort', cohort)
    .fetchAll()
    .then(function(topics) {
      res.send(topics);
    })
    .catch(function(error) {
      console.log(error);
      res.send(error);
    });
  }

  function getTopic(req, res) {
    res.send('getTopic');
  }

  function deleteTopic(req, res) {
    res.send('deleteTopic');
  }


  module.exports = routes;

})();
