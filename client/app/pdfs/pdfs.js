'use strict';

angular.module('policyAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/pdfs', {
        templateUrl: 'app/pdfs/pdfs.html',
        controller: 'PdfsCtrl'
      });
  });
