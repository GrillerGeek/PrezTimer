(function() {
  'use strict';

  angular
    .module('prezTimer')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(prezService, $location, $log) {
    var vm = this;

    vm.presentation = prezService.prez;

    vm.startPrez = startPrez;
    
    activate();

    function activate() {

    }
    
    function startPrez() {
        $log.log(vm.presentation);
        $location.path('/prez/');
    }

  }
})();