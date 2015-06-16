'use strict';

describe('Controller: DataSecurityCtrl', function () {

  // load the controller's module
  beforeEach(module('policyAppApp'));

  var DataSecurityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DataSecurityCtrl = $controller('DataSecurityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
