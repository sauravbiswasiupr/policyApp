'use strict';

describe('Directive: uploadForm', function () {

  // load the directive's module and view
  beforeEach(module('policyAppApp'));
  beforeEach(module('app/uploadForm/uploadForm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<upload-form></upload-form>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the uploadForm directive');
  }));
});