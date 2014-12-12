'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.directive:productsList
 * @description
 * # productsList
 * Directive of the feedbackFormApp
 */
(function(){

  var app = angular.module('feedbackFormApp');

  app.directive('productsList', function() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/products-list.html'
    };
  });

})();