'use strict';

/* Controllers */
var adminController = angular.module('adminController', []);

adminController.controller('ListCtrl', ['$scope', 'Items', 'Data', function($scope, Items, Data) {
	$scope.items = Items.query(function(data) {
		var i = 0;
		angular.forEach(data, function(v, k) {data[k]._id = i++;});
	});
	$scope.tablehead = [
		{name: 'title', title: 'Заголовок'},
		{name: 'category', title: 'Категория'},
		{name: 'answerer', title: 'Кому задан'},
		{name: 'author', title: 'Автор'},
		{name: 'created', title: 'Задан'},
		{name: 'answered', title: 'Отвечен'},
		{name: 'shown', title: 'Опубликован'},
	];
	$scope.categories = Data('categories');
	//$scope.answerers = Data('answerers');
}]);

adminController.controller('NewCtrl', [function() {

}]);
  
adminController.controller('EditCtrl', [function() {

}]);