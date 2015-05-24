angular.module('myApp')
.controller('ProductsCtrl', ['$scope','$rootScope','products','$location','$timeout', function($scope, $rootScope, products, $location, $timeout){
	$rootScope.title = 'Daftar Produk';
	$scope.product = {
		panelClass: 'info'
	}

	$scope.placeholder = {
		name: 'Nama di halaman products',
		price: 'placeholder harga'
	};

	$timeout(function(){
		$scope.products = products.data;
	},300);

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