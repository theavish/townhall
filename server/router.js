(function() {
  'use strict';

  var router = require('express').Router();
  var jsonparser = require('body-parser').json();

  var topic = require('./routes/topic');
  var comment = require('./routes/comment');

  router.post('/api/createTopic', jsonparser, topic.createTopic);
  router.get('/api/getAllTopicsByCohort/:cohort', topic.getAllTopicsByCohort);
  router.get('/api/getTopicById/:id', topic.getTopicById);
  router.delete('/api/deleteTopic/:id', topic.deleteTopic);
  router.put('/api/voteOnTopic', jsonparser, topic.voteOnTopic);

  router.post('/api/createComment', jsonparser, comment.createComment);
  router.get('/api/getCommentsByTopicId/:topicId', comment.getCommentsByTopicId);
  router.get('/api/getCommentById/:commentId', comment.getCommentById);
  router.delete('/api/deleteComment/:id', comment.deleteComment);
  router.put('/api/voteOnComment', jsonparser, topic.voteOnComment);

  module.exports = router;

})();
