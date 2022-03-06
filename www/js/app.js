const app = angular.module('app-template', ['onsen']);

app.controller('PageController', function($scope) {
	$scope.count = 0;

	$scope.incrementCount = function() {
		$scope.count += 1;
	};
});
