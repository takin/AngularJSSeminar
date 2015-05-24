angular.module('myApp')
.directive('myLoader', function(){
	return {
		restrict:'AE',
		scope:{},
		templateUrl:'directives/loader/loader.html'
	}
});