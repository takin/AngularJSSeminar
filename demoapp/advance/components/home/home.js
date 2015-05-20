angular.module('myApp')
.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	$rootScope.title = 'Welcome';
}]);