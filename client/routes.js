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
      .state('submit', {
        url: '/submit',
        templateUrl: 'submit/submitView.html'
      });

      $urlRouterProvider.otherwise('/home');
  }

})();
