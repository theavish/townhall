(function() {
  'use strict';

  var routes = {
    createTopic: createTopic,
    getAllTopicsByCohort: getAllTopicsByCohort,
    getTopic: getTopic,
    deleteTopic: deleteTopic,
    voteOnTopic: voteOnTopic
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
    var topicId = req.params.id;
    new Model.Topic().where('id', topicId)
      .destroy()
      .then(function(data) {
        console.log(data);
        res.send(data);
      })
      .catch(function(error) {
        res.send(error);
      });
  }

  function voteOnTopic(req, res) {
    var type = req.body.type;
    var topicId = req.body.topicId;
    new Model.Topic().where('id', topicId)
      .fetch()
      .then(function(topic) {
        if (type == 1) {
          topic.save(++topic.attributes.votes);
        } else {
          topic.save(--topic.attributes.votes);
        }
        res.send(topic);
      })
      .catch(function(error) {
        console.log(error);
        res.send(error);
      });
  }


  module.exports = routes;

})();
