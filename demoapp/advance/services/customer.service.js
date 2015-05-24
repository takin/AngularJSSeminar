angular.module('myApp')
.factory('Customers',['$http',function($http){
	var customer = {};

	customer.getAll = function(){
			return $http.get('api/customers.json');
	};
	
	customer.getOne = function(){
		return customer.getAll().then(function(res){
			var item = {};
			res.data.forEach(function(p,i){
				if(p.id === id){
					item = p;
				}
			});
			return item;
		});
	};
	return customer;
}]);