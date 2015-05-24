angular.module('myApp')
.directive('myForm', function(){
	return{
		restrict: 'E',
		templateUrl:'directives/form/form.html'
	}
});