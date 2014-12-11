'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.directive:aboutText
 * @description
 * # aboutText
 * Directive of the feedbackFormApp
 */
(function(){

  var app = angular.module('feedbackFormApp');

  app.directive('aboutText', function() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/about-text.html'
    };
  });

})();
