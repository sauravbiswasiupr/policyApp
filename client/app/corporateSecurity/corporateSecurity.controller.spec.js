'use strict';

describe('Controller: CorporateSecurityCtrl', function () {

  // load the controller's module
  beforeEach(module('policyAppApp'));

  var CorporateSecurityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CorporateSecurityCtrl = $controller('CorporateSecurityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
