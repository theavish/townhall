(function() {
  'use strict';

  angular.module('townhall')
    .factory('topicListFct', topicListFct);

  topicListFct.$inject = ['$location'];

  function topicListFct($location) {
    
    var factory = {
      goToComments: goToComments
    };

    function goToComments(cohort, topicId) {
      $location.url('/' + cohort + '/' + topicId + '/comments');
    }

    return factory;
  }

})();
