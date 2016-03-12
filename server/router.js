(function() {
  'use strict';

  var router = require('express').Router();
  var jsonparser = require('body-parser').json();

  var topic = require('./routes/topic.js');

  router.post('/api/createTopic', jsonparser, topic.createTopic);
  router.get('/api/getAllTopicsByCohort/:cohort', jsonparser, topic.getAllTopicsByCohort);
  router.get('/api/getTopic', topic.getTopic);
  router.delete('/api/deleteTopic', topic.deleteTopic);
  router.put('/api/voteOnTopic', jsonparser, topic.voteOnTopic);

  module.exports = router;

})();
