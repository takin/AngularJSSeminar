angular.module('myApp')
.controller('CustomersCtrl',['$scope','customers',function($scope,customers){
	var customer = this;
	$scope.customers = customers.data;
}]);