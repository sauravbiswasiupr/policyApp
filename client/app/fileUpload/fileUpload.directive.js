'use strict';

angular.module('policyAppApp')
  .directive('fileUpload', function () {
    return {
      scope: true,
      link: function (scope, element, attrs) {
        element.bind("change", function(event) {
          var files = event.target.files;
          for (var i = 0; i < files.length; i++)
            scope.$emit("fileSelected", { file: files[i] });
        });
      }
    };
  });