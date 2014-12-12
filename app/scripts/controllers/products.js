'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackFormApp
 */
(function() {
  angular.module('feedbackFormApp')
      .controller('ProductsCtrl', function($scope) {
        $scope.addToCart = function($event, $index){
          $event.preventDefault();
          $scope.orderList[$index]++;
        }
      });

})();
