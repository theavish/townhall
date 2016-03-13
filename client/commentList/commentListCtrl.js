(function() {
  'use strict';

  angular.module('townhall')
    .controller('commentListCtrl', commentListCtrl);

  commentListCtrl.$inject = ['commentListFct', '$location'];

  function commentListCtrl(commentListFct, $location) {
    var ctrl = this;
    var topicId = (new RegExp(/\/\d+\//gi).exec($location.path())[0]).replace(/\//g, '');
    ctrl.getTopic = getTopic;

    function getTopic() {
      commentListFct.getTopic(topicId)
        .then(function(data) {
          ctrl.topic = data;
        });
    }
  }

})();
