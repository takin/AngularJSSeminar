angular.module('myApp')
.directive('myNavigation', function(){
	return {
		restrict: 'E',
		scope:{},
		templateUrl: 'directives/navigation/navigation.html',
		link: function(scope, element, attrs){
			scope.menus = [
				{link:'products', name:'Products'},
				{link:'customers', name:'Customers'},
				{link:'about', name:'About Us'}
			];
		}
	}
});