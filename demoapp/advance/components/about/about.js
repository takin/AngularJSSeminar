angular.module('myApp')
.controller('AboutCtrl', ['$scope', '$rootScope', function($scope,$rootScope){
	$rootScope.title = 'Tentang Kami';
	$scope.placeholder = {
		name: 'nama di halaman about'
	}
}]);