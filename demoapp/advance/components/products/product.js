angular.module('myApp')
.controller('ProductsCtrl', ['$scope','$rootScope','products','$location','$timeout', function($scope, $rootScope, products, $location, $timeout){
	$rootScope.title = 'Daftar Produk';
	$timeout(function(){
		$scope.products = products;
	},300);

	$scope.onRemove = function(index){
		$scope.products.splice(index,1);
	}

	$scope.addProduct = function(){
		$scope.product.panelClass = $scope.products[$scope.products.length - 1].panelClass == 'info' ? 'success' : 'info';
		$scope.products.push($scope.product);
		$scope.product = {};
	}
}]);