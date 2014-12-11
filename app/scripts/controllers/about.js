'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feedbackFormApp
 */
angular.module('feedbackFormApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
      $rootScope.header = 'About Us';
  });
