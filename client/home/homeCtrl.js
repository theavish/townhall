(function() {
  'use strict';

  angular.module('townhall')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = [];

  function homeCtrl() {
    var ctrl = this;

    ctrl.log = log;

    function log() {
      console.log(arguments);
    }
  }

})();
