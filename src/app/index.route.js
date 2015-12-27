(function() {
  'use strict';

  angular
    .module('prezTimer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('prez', {
        url: '/prez/',
        templateUrl: 'app/prez/prez.html',
        controller: 'PrezController',
        controllerAs: 'prez'  
      });

    $urlRouterProvider.otherwise('/');
  }

})();
