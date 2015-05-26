angular.module('myApp')
.directive('productDisplay', function(){
	return {
		restirction: 'E',
		transclude: true,
		scope:{
			product: '=productData'
		},
		templateUrl: 'directives/product_display/product_display.html',
		link: function(scope,element,attrs){

			var options = scope.$eval(attrs.options);

			scope.options = options;

			element.on('mouseenter', function(e){
				if(options.animated){
					element.children().addClass('animated rubberBand');
				}
			});

			element.on('mouseleave', function(){
				if(options.animated){
					element.children().removeClass('animated rubberBand');
				}
			});
		}
	}
});