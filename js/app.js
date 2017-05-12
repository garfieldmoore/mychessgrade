'use strict';
var app = angular.module('ratingsApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {

  $routeProvider.when('/calculator', {
    templateUrl: 'templates/ChessCalculator.html',
    controller: 'RatingCalculator2Controller'
  });

  $routeProvider.when('/feedback', {
    templateUrl: 'templates/customerFeedback.html',
    controller: 'CustomerFeedbackController'
  });

  $routeProvider.when('/about', {
    templateUrl: 'templates/about.html',
    // controller:'CustomerFeedbackController'
  });

  $routeProvider.otherwise({
    redirectTo: '/calculator'
  });

});
