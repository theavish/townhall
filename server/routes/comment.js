(function() {
  'use strict';

  var routes = {
    createComment: createComment,
    getCommentsByTopicId: getCommentsByTopicId,
    deleteComment: deleteComment,
    voteOnComment: voteOnComment
  };

  var Model = require('../db/models/Topic');

  function createComment(req, res) {
    console.log(req.body);
    new Model.Topic({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        parent: req.body.parent
      }).save()
      .then(function(comment) {
        console.log(comment);
        //link comment to parent topic
        res.send(comment);
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

  function getTopicById(req, res) {
    var topicId = req.params.id;
    new Model.Topic().where('id', topicId)
      .fetch()
      .then(function(topics) {
        res.send(topics);
      })
      .catch(function(error) {
        console.log(error);
        res.send(error);
      });
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
