'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feedbackFormApp
 */
angular.module('feedbackFormApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
