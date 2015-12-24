(function() {
  'use strict';

  angular
    .module('prezTimer')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, prezService, $log) {
    var vm = this;

    vm.presentation = prezService.prez;

    vm.startPrez = startPrez;
    
    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
    
    function startPrez() {
        $log.log(vm.presentation);
    }

  }
})();
