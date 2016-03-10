(function() {
  'use strict';

  angular.module('townhall')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['homeFct'];

  function homeCtrl(homeFct) {
    var ctrl = this;

    ctrl.log = log;
    ctrl.goToCohortTopics = homeFct.goToCohortTopics;

    function log() {
      console.log(arguments);
    }

  }

})();
