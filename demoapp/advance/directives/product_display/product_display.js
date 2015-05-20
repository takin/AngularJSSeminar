angular.module('myApp')
.directive('productDisplay', function(){
	return {
		restirction: 'E',
		scope:{
			product: '=info',
			width: '=panelWidth',
			pc: '=panelClass',
			remove: '&onRemove',
			isLink:'='
		},
		templateUrl: 'directives/product_display/product_display.html'
	}
});