angular.module('myApp')
.factory('Products', ['$http',function($http){
	return {
		getAll: function(){
			return $http.get('api/products.json');
		},
		getOne: function(id){
			return $http.get('api/products.json').then(function(res){
				var item = {};
				res.data.forEach(function(p,i){
					if(p.id === id){
						item = p;
					}
				});
				return item;
			});
		}
	}
}]);