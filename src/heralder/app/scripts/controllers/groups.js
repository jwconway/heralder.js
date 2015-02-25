'use strict';

/**
 * @ngdoc function
 * @name heralderApp.controller:AboutCtrl
 * @description
 * # GroupsCtrl
 * Controller of the heralderApp
 */
angular.module('heralderApp')
  .controller('GroupsCtrl', function ($scope, $http) {
  	var url = 'http://localhost:50003/group'
  	$http.get(url).success(function(response){
        $scope.groups = response.data;
  	});
  });