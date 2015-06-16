'use strict';

angular.module('policyAppApp')
  .directive('validateAnswer', function () {
    return {
      template: 
        '<div class="form-group">' +
          '<textarea class="form-control" rows="3" placeholder="Your answer" ng-model="answer">' +
          '</textarea><br>' +
          '<button type="submit" class="btn btn-success" ng-click="verify()">Verify</button><br><br>' +
          '<div class="alert alert-success" ng-show="success">Success</div><br>' +
          '<div class="alert alert-danger" ng-show="error">Failed to verify</div>'+
        '</div>',
      restrict: 'EA',
      scope: {
        tokens: "@",
        length: "=length"
      },
      controller: ["$scope", "$http", "$timeout", "$element", function($scope, $http, $timeout, $element) {
        $scope.success = false;
        $scope.error = false;
        
        $scope.verify = function() {
          var body = {
            tokens: $scope.tokens,
            answer: $scope.answer
          };
          
          $http.post("/api/verify", {form: body})
            .then(function(data, status, headers, config) {
              if (data.data.success === true) {
                $scope.success = true;
                $scope.error = false;
                
                $element.parent().fadeOut("slow");
                $scope.$emit("taskCompleted");
              } else {
                $scope.success = false;
                $scope.error = true;
              }
            }, function(data, status, headers, config) {
              $scope.success = false;
              $scope.error = true;
              
              $timeout(function() {
                  $scope.error = false;
                  $scope.answer = "";
                  $scope.tokens = [];
                }, 3000);
            });
        }
      }]
    };
  });