var app = angular.module('influx', ['ngRoute', 'ngAnimate', 'ui.grid', 'ui.grid.moveColumns', 'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit']);

// configure our routes
app.config(function($routeProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : "pAccountInfo.html",
			controller  : 'mainController'
		})

		// route for the about page
		.when('/WatchList', {
			templateUrl : 'pWatchList.html',
			controller  : 'wlController'
		})

		// route for the contact page
		.when('/HoldingList', {
			templateUrl : 'pHoldingList.html',
			controller  : 'hlController'
		});
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Account Info';
});

app.controller('wlController', function($scope) {
	$scope.message = 'Watch List';
});

app.controller('hlController', function($scope) {
	$scope.message = 'Holding List';
});