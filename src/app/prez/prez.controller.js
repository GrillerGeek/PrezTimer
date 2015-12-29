(function() {
  'use strict';

  angular
    .module('prezTimer')
    .controller('PrezController', PrezController);

  /** @ngInject */
  function PrezController(prezService, $location, $log) {
    var vm = this;
    var presentation = prezService.prez;
    
    vm.presentation = presentation;
    vm.previousSlide = previousSlide;
    vm.nextSlide = nextSlide;
    vm.blockTimer = false;
    vm.message = '';
    vm.alertType = 'alert-info';
    
    activate();

    function activate() {
        $log.info(vm.presentation);
        if (!vm.presentation.title || vm.presentation.title === '') {
            vm.blockTimer = true;
            vm.alertType = 'alert-danger';
            vm.message = 'You did not define a presentation. Return to home and provide the presenation details';
        } 
        
        vm.presentation.startTime = new Date().getTime();
    }
    
    function previousSlide() {
        presentation.currentSlide += -1;
    }

    function nextSlide() {
        presentation.currentSlide += 1;
    }
    
  }
})();