(function() {
  'use strict';

  angular.module('townhall')
    .factory('commentListFct', commentListFct);

  commentListFct.$inject = ['$http'];

  function commentListFct($http) {
    var factory = {
      getTopic: getTopic
    };

    function getTopic(topicId) {
      return $http.get('/api/getTopicById/' + topicId)
        .then(function(response) {
          return response.data;
        });
    }

    return factory;
  }

})();
