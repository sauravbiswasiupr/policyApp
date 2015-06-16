'use strict';

describe('Controller: PdfsCtrl', function () {

  // load the controller's module
  beforeEach(module('policyAppApp'));

  var PdfsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PdfsCtrl = $controller('PdfsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
