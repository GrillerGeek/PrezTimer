(function() {
  'use strict';

  angular
    .module('prezTimer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
