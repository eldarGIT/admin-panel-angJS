'use strict';

/* Controllers */

var adminController = angular.module('adminController', []);

adminController.controller('ListCtrl', ['$scope', 'Items', 'Data', function($scope, Items, Data) {
	$scope.items = Items.query();
  }]);

adminController.controller('NewCtrl', [function() {

  }]);
  
adminController.controller('EditCtrl', [function() {

  }]);