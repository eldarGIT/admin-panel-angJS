'use strict';

angular.module('admin', ['ngRoute', 'adminController'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'})
			.when('/new', {templateUrl: 'partials/edit.html', controller: 'NewCtrl'})
			.when('/edit/:id', {templateUrl: 'partials/edit.html', controller: 'EditCtrl'})
			.otherwise({redirectTo: '/list'});
	},
]);