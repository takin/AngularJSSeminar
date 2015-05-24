angular.module('myApp')
.controller('CustomersCtrl',['$scope','customers',function($scope,customers){
	$scope.customers = customers.data;
}]);