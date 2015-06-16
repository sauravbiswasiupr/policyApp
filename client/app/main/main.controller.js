'use strict';

angular.module('policyAppApp')
  .controller('MainCtrl', ["$scope", "$modal", function ($scope, $modal) {
    $scope.adminLogin = function() {
      return $modal.open({
        template: 
          '  <div class="modal-body">' +
          '    <h3 class="text-center">Admin Login</h3>'+
          '    <form style="margin: 30px">' +
          '      <div class="form-group">' +
          '       <input type="email" class="form-control" name="email" placeholder="email">' +
          '      </div>' +
          '     <div class="form-group">' +
          '       <input type="password" class="form-control" name="password" placeholder="password">' +
          '      </div>' +
          '     <div class="form-group">' +
          '       <button class="btn btn-success" type="submit" ng-click="submit()">Login</button>' +
          '      </div>' +
          '    </form>' +
          '  </div>',
        controller: function($scope, $modalInstance, $location) {
          $scope.submit = function() {
            $location.path("/dashboard");
            $modalInstance.close();
          }
        }
      }).result;
    }
    
    $scope.userLogin = function() {
       return $modal.open({
        template: 
          '  <div class="modal-body">' +
          '    <h3 class="text-center">User Login</h3>'+
          '    <form style="margin: 30px">' +
          '      <div class="form-group">' +
          '       <input type="email" class="form-control" name="email" placeholder="email">' +
          '      </div>' +
          '     <div class="form-group">' +
          '       <input type="password" class="form-control" name="password" placeholder="password">' +
          '      </div>' +
          '     <div class="form-group">' +
          '       <button class="btn btn-success" type="submit" ng-click="submit()">Login</button>' +
          '      </div>' +
          '    </form>' +
          '  </div>',
        
        controller: function($scope, $modalInstance, $location) {
          $scope.submit = function() {
            $location.path("/user");
            $modalInstance.close();
          }
        }
      }).result;
    }
  }]);
