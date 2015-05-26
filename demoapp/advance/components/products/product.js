angular.module('myApp')
.controller('ProductsCtrl', ['$scope','$rootScope','products', function($scope, $rootScope, products){
	$rootScope.title = 'Daftar Produk';
	$scope.product = {
		panelClass: 'info'
	}

	$scope.placeholder = {
		name: 'Nama di halaman products',
		price: 'placeholder harga'
	};

	$scope.products = products.data;

	$scope.onRemove = function(index){
		$scope.products.splice(index,1);
	}

	$scope.addProduct = function(valid){
		$scope.product.id = $scope.products.length;
		$scope.products.push($scope.product);
		$scope.product = {
			panelClass: 'info'
		};
	}
}]);