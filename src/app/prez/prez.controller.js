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
    vm.newPresentation = newPresentation;
    vm.previousSlide = previousSlide;
    vm.nextSlide = nextSlide;
    
    activate();

    function activate() {
        $log.info(vm.presentation);    
    }
    
    function newPresentation() {
        $location.path('/');
    }
    
    function previousSlide() {
        presentation.currentSlide += -1;
    }

    function nextSlide() {
        presentation.currentSlide += 1;
    }
    
  }
})();