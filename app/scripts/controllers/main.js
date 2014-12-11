'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackFormApp
 */
angular.module('feedbackFormApp')
    .controller('MainCtrl', function ($scope, $location) {
      $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
      };

      $scope.developerName = "Katherina Utlik";
    });


