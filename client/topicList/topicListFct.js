(function() {
  'use strict';

  angular.module('townhall')
    .factory('topicListFct', topicListFct);

  topicListFct.$inject = ['$location', '$http'];

  function topicListFct($location, $http) {

    var factory = {
      goToComments: goToComments,
      getTopics: getTopics
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

    return factory;
  }

})();
