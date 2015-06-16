'use strict';

describe('Directive: validateAnswer', function () {

  // load the directive's module
  beforeEach(module('policyAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<validate-answer></validate-answer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the validateAnswer directive');
  }));
});