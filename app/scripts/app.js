'use strict';

/**
 * @ngdoc overview
 * @name feedbackFormApp
 * @description
 * # feedbackFormApp
 *
 * Main module of the application.
 */
(function() {

  angular
      .module('feedbackFormApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
      ])
      .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
              templateUrl: 'views/main.html',
              controller: 'HomeCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .when('/cart', {
              templateUrl: 'views/cart.html',
              controller: 'CartCtrl'
            })
            .otherwise({
              redirectTo: '/home'
            });
      });

})();