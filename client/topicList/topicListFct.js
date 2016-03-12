(function() {
  'use strict';

  angular.module('townhall')
    .factory('topicListFct', topicListFct);

  topicListFct.$inject = ['$location', '$http'];

  function topicListFct($location, $http) {

    var factory = {
      goToComments: goToComments,
      getTopics: getTopics,
      vote: vote
    };

    function getTopics(cohort) {
      return $http.get('/api/getAllTopicsByCohort/' + cohort)
        .then(function(topics) {
          return topics.data;
        });
    }

    function goToComments(cohort, topicId) {
      $location.url('/' + cohort + '/' + topicId + '/comments');
    }

    function vote(type, topicId) {
      return $http.put('/api/voteOnTopic', {
          type: type,
          topicId: topicId
        })
        .then(function(response) {
          console.log(response);
          return response.data.votes;
        });
    }

    return factory;
  }

})();
