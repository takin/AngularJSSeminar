angular.module('myApp')
.factory('Products', ['$http',function($http){
	var product = {};
	
	product.getAll = function(){
		return $http.get('api/products.json');
	};


	product.getOne = function(id){
		return product.getAll().then(function(res){
			var item = {};
			res.data.forEach(function(p,i){
				if(p.id === id){
					item = p;
				}
			});
			return item;
		});
	};

	return product;
}]);