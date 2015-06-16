'use strict';

angular.module('policyAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/corporateSecurity', {
        templateUrl: 'app/corporateSecurity/corporateSecurity.html',
        controller: 'CorporateSecurityCtrl'
      });
  });
