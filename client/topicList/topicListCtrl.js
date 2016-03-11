(function() {
  'use strict';

  angular.module('townhall')
    .controller('topicListCtrl', topicListCtrl);

  topicListCtrl.$inject = ['topicListFct'];

  function topicListCtrl(topicListFct) {
    var cohort = new RegExp(/MKS[0-9][0-9]/gi).exec($location.path())[0];

    var ctrl = this;

    ctrl.goToComments = topicListFct.goToComments;
    ctrl.getTopics = getTopics;

    function getTopics() {
      topicListFct.getTopics(cohort)
        .then(function(topics) {
          console.log('topics for ' + cohort, topics);
          ctrl.topics = topics;
        });
    }


  }

})();
