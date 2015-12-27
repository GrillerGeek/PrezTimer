'use strict';
describe('Controller: prezCtrl', function () {
// load the controller's module
  beforeEach(module('prezTimer'));
  var prezCtrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    prezCtrl = $controller('prezCtrl', {
      $scope: scope
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
