'use strict';

/**
 * @ngdoc function
 * @name heralderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the heralderApp
 */
angular.module('heralderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
