angular.module('myApp')
.directive('myThumbnail', ['$animate',function($animate){
	return {
		restrict: 'A',
		transclude: true,
		templateUrl:'directives/flicker_thumb/flicker_thumbnail.html',
		link: function(scope, element, attrs){
			var photo = scope.$eval(attrs.myThumbnail);
			scope.imageUrl = 'https://farm'+ photo.farm +'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_c.jpg';

			element.on('mouseenter', function(e){
				element.children().addClass('animated pulse');
			});

			element.on('mouseleave', function(){
				element.children().removeClass('animated pulse');
			});
		}
	}
}]);