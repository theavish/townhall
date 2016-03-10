(function() {
  'use strict';

  var router = require('express').Router();
  var topic = require('./routes/topic.js');

  router.post('/api/createTopic', topic.createTopic);
  router.get('/api/getAllTopics', topic.getAllTopics);
  router.get('/api/getTopic', topic.getTopic);
  router.delete('/api/deleteTopic', topic.deleteTopic);

  module.exports = router;
})();
