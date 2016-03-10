(function() {
  'use strict';

  angular.module('townhall')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './home/homeView.html'
      })
      .state('submitTopic', {
        url: '/:cohort/submitTopic',
        templateUrl: 'submitTopic/submitTopicView.html'
      })
      .state('submitComment', {
        url: '/:cohort/:topic/submitComment',
        templateUrl: 'submitComment/submitCommentView.html'
      })
      .state('topicList', {
        url: '/:cohort/topics',
        templateUrl: 'topicList/topicListView.html'
      })
      .state('commentList', {
        url: '/:cohort/:topic/comments',
        templateUrl: 'commentList/commentListView.html'
      });

      $urlRouterProvider.otherwise('/home');
  }

})();
