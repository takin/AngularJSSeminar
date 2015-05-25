angular.module('myApp')
.directive('productDisplay', function(){
	return {
		restirction: 'E',
		scope:{
			product: '=info',
			width: '=panelWidth',
			pc: '=panelClass',
			remove: '&onRemove',
			isLink:'@'
		},
		templateUrl: 'directives/product_display/product_display.html',
		link: function(scope,element,attrs){

			element.on('mouseenter', function(e){
				element.children().addClass('animated swing');
			});

			element.on('mouseleave', function(){
				element.children().removeClass('animated swing');
			});
		}
	}
});