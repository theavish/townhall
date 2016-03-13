(function() {
  'use strict';

  angular.module('townhall')
    .controller('topicListCtrl', topicListCtrl);

  topicListCtrl.$inject = ['topicListFct', '$location'];

  function topicListCtrl(topicListFct, $location) {
    var cohort = new RegExp(/MKS[0-9][0-9]/gi).exec($location.path())[0];

    var ctrl = this;
    ctrl.isWriting = false;
    ctrl.goToComments = topicListFct.goToComments;
    ctrl.getTopics = getTopics;
    ctrl.vote = vote;
    ctrl.submitTopic = submitTopic;

    function vote(type, topic) {
      topicListFct.vote(type, topic.id)
        .then(function(votes) {
          topic.votes = votes;
        });
    }

    function getTopics() {
      topicListFct.getTopics(cohort)
        .then(function(topics) {
          console.log('topics for ' + cohort, topics);
          ctrl.topics = topics;
        });
    }

    function submitTopic() {
      var topic = ctrl.newTopic;
      topic.cohort = cohort;
      topic.author = 'Avi Samloff'; //capture author from GH auth
      topicListFct.submitTopic(topic)
        .then(function(response) {
          ctrl.topics.push(response);
          ctrl.isWriting = false;
        });

    }


  }

})();
