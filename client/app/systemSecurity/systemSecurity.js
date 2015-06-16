'use strict';

angular.module('policyAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/systemSecurity', {
        templateUrl: 'app/systemSecurity/systemSecurity.html',
        controller: 'SystemSecurityCtrl'
      });
  });
