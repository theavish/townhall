(function() {
  'use strict';

  angular.module('townhall')
    .factory('homeFct', homeFct);

  homeFct.$inject = ['$location'];

  function homeFct($location) {
    var factory = {
      goToCohortTopics: goToCohortTopics
    };

    function goToCohortTopics(cohort) {
      $location.url('/' + cohort + '/topics');
    }

    return factory;
  }

})();
