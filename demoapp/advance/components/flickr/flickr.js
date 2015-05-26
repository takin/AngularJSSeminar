angular.module('myApp')
.controller('FlickrCtrl', ['$scope', '$rootScope','FlickrService','getRandomImages', function($scope,$rootScope,FlickrService, getRandomImages){
	$rootScope.title = 'Flickr Photo Search';

	$scope.photos = getRandomImages.data.photos.photo;

	$scope.isFound = false;

	$scope.search = function(){
		$rootScope.isLoading = true;
		$scope.textToSearch = $scope.searchTerm;
		FlickrService.search($scope.searchTerm).success(function(res){
			$scope.isFound = true;
			$rootScope.isLoading = false;
			$scope.totalFound = res.photos.total;
			$scope.photos = res.photos.photo;
			$scope.searchTerm = null;
		});
	}
}]);