'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackFormApp
 */
angular.module('feedbackFormApp')
  .controller('FeedbackFormCtrl', function ($scope) {
    this.showFeedbackForm = false,

    this.showForm = function() {
      this.showFeedbackForm = !this.showFeedbackForm;
    };
  })

  .directive('feedback-form', function() {
    return {
      templateUrl: 'feedback-form.html'
    };
  });

