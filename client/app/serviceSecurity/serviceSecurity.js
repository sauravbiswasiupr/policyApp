'use strict';

angular.module('policyAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/serviceSecurity', {
        templateUrl: 'app/serviceSecurity/serviceSecurity.html',
        controller: 'ServiceSecurityCtrl'
      });
  });
