'use strict';

/**
 * @ngdoc function
 * @name heralderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heralderApp
 */
angular.module('heralderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
