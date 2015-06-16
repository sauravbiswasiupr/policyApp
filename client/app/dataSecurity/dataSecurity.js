'use strict';

angular.module('policyAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard/dataSecurity', {
        templateUrl: 'app/dataSecurity/dataSecurity.html',
        controller: 'DataSecurityCtrl'
      });
  });
