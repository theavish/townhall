(function() {
  'use strict';

  angular.module('townhall')
    .controller('topicListCtrl', topicListCtrl);

  topicListCtrl.$inject = ['topicListFct', '$location'];

  function topicListCtrl(topicListFct, $location) {
    var cohort = new RegExp(/MKS[0-9][0-9]/gi).exec($location.path())[0];

    var ctrl = this;

    ctrl.goToComments = topicListFct.goToComments;

    topicListFct.getTopics(cohort)
      .then(function(topics) {
        console.log('topics for ' + cohort, topics);
        ctrl.topics = topics;
      });


  }

})();
