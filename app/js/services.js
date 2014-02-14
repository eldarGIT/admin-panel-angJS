'use strict';

/* Services */
var adminService = angular.module('adminService', ['ngResource']);	// 'ngResource'

adminService.factory('Items', ['$resource', function($resource) {
	return $resource('questions/questions.json', {}, {
		query: {method:'GET', params:{}, isArray: true}
	});
}]);

adminService.factory('Data', function($resource) {
	var load = $resource('questions/categories.json');
	// var loadList = ['categories', 'answerers'];
	var loadList = ['categories.json'];
	var data = {};
	
	for (var i=0; i<loadList.length; i++) {
		console.log(loadList[i]);
		load.get();
		//data[loadList[i]] = load.get({name:loadList[i]});
	}

	return function(key) {return {};};
});