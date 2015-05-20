angular.module('myApp')
.controller('ProductDetailCtrl', ['$scope','$routeParams','Products', function($scope,$routeParams, Products){
	Products.getOne(parseInt($routeParams.id)).then(function(product){
		$scope.product = product;
	});
}]);