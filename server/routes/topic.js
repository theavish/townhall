(function() {
  'use strict';

  var routes = {
    createTopic: createTopic,
    getAllTopics: getAllTopics,
    getTopic: getTopic,
    deleteTopic: deleteTopic
  };

  function createTopic(req, res) {
    res.send('createTopic');
  }

  function getAllTopics(req, res) {
    res.send('getAllTopics');
  }

  function getTopic(req, res) {
    res.send('getTopic');
  }

  function deleteTopic(req, res) {
    res.send('deleteTopic');
  }


  module.exports = routes;

})();
