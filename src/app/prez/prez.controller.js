(function() {
  'use strict';

  angular
    .module('prezTimer')
    .controller('PrezController', PrezController);

  /** @ngInject */
  function PrezController(prezService, $log) {
    var vm = this;

    vm.presentation = prezService.prez;
    
    activate();

    function activate() {
        $log.info(vm.presentation);    
    }

  }
})();