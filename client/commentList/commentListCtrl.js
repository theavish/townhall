(function() {
  'use strict';

  angular.module('townhall')
    .controller('commentListCtrl', commentListCtrl);

  commentListCtrl.$inject = [];

  function commentListCtrl() {
    var ctrl = this;

    ctrl.comments = [{
      id: 1,
      text: 'this is a comment',
      votes: 3,
      author: 'Alex Jeng',
      postDate: 1457650908742
    }, {
      id: 2,
      text: 'this is another comment',
      votes: 10,
      author: 'Avi Samloff',
      postDate: 1457651018742
    }];
  }

})();
