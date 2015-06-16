'use strict';

angular.module('policyAppApp')
  .controller('PdfsCtrl', function ($scope, $http) {
    $scope.pdfs = [];
    $scope.success = false;
    $scope.error = false;
    
    $scope.$on("taskCompleted", function(event) {
      $scope.length--;
    });
    
    $http.get("/api/pdfs")
      .then(function(data, status, headers, config) {
        $scope.pdfs = data.data.pdfs;
        $scope.length = $scope.pdfs.length;
        $scope.success = true;
      })
      .then(function(data, status, headers, config) {
        $scope.error = true;
      });
  });
