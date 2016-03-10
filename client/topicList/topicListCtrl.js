(function() {
  'use strict';

  angular.module('townhall')
    .controller('topicListCtrl', topicListCtrl);

  topicListCtrl.$inject = ['topicListFct'];

  function topicListCtrl(topicListFct) {

    var ctrl = this;

    ctrl.topics = [{
      id: 1,
      title: 'Test topic',
      text: 'this is a test topic',
      votes: 17,
      author: 'Avi Samloff',
      postDate: 1457649043292,
      cohort: 'MKS32'
    }, {
      id: 2,
      title: 'topic number 2',
      text: 'yet another test topic',
      votes: 5,
      author: 'Alex Jeng',
      postDate: 1457650043292,
      cohort: 'MKS32'
    }];

    ctrl.goToComments = topicListFct.goToComments;

    
  }

})();
