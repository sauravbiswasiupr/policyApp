'use strict';

describe('Controller: SystemSecurityCtrl', function () {

  // load the controller's module
  beforeEach(module('policyAppApp'));

  var SystemSecurityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SystemSecurityCtrl = $controller('SystemSecurityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
