'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackFormApp
 */
angular.module('feedbackFormApp')
    .controller('HomeCtrl', function ($scope, $rootScope) {
      $rootScope.header = 'Home page';
    });
