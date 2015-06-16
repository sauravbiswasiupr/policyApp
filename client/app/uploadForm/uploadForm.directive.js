'use strict';

angular.module('policyAppApp')
  .directive('uploadForm', function () {
    return {
      templateUrl: 'app/uploadForm/uploadForm.html',
      restrict: 'EA',
      scope: {
        sectionName: "@"
      },
      controller: ["$scope", "$http", "$timeout", function($scope, $http, $timeout) {
        var self = this;
        $scope.success = false;
        $scope.error = false;
        $scope.isFormVisible = false;
    
        $scope.viewForm = function() {
          $scope.isFormVisible = true;
        }
    
        $scope.hideForm = function() {
          $scope.isFormVisible = false;
        }
    
        $scope.$on("fileSelected", function(event, args) {
          $scope.$apply(function() {
            var tokens = $("#myFileUpload").val().split("\\");
            $scope.file = "Users/saurav/Desktop/" + tokens[tokens.length-1];
          });
        });
    
        this.returnTags = function(tags) {
          var returnTags = [];
          for (var i = 0; i < tags.length; i++)
            returnTags.push(tags[i].text);

          return returnTags;
        };
    
        $scope.submit = function() {
          var body = {
            question: $scope.question,
            tags: self.returnTags($scope.tags),
            section: "data security",
            users: self.returnTags($scope.users),
            filename: $scope.file
          }
      
          $http.post("/api/uploads", { form: body })
            .then(function(data, status, headers, config) {
              if (data.data.success === true) {

                $scope.success = true;
                $scope.error = false;

                $timeout(function() {
                  $scope.success = false;
                  $scope.question = "";
                  $scope.tags = [];
                  $scope.users = [];
                }, 3000);

                // Clear the scope bound variables to enable form resubmission
              } else {
                $scope.error = true;
                $scope.success = false;
              }
            }, function(data, status, headers, config) {
              $scope.error = true;
            });
        };
      }],
      link: function (scope, element, attrs) {
      }
    };
  });