'use strict';

describe('Controller: ServiceSecurityCtrl', function () {

  // load the controller's module
  beforeEach(module('policyAppApp'));

  var ServiceSecurityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceSecurityCtrl = $controller('ServiceSecurityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
