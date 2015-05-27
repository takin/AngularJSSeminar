angular.module('myApp')
.controller('FlickrCtrl', ['$scope', '$rootScope','FlickrService','getRandomImages', function($scope,$rootScope,FlickrService, getRandomImages){
	$rootScope.title = 'Flickr Photo Search';
	$scope.searchText = '';

	$scope.photos = getRandomImages.data.photos.photo;

	$scope.isFound = false;

	$scope.search = function(){
		$scope.searchText = $scope.searchTerm;
		$rootScope.isLoading = true;
		$scope.isFound = false;

		FlickrService.search($scope.searchTerm).success(function(res){
			$scope.isFound = true;
			$rootScope.isLoading = false;
			$scope.totalFound = res.photos.total;
			$scope.photos = res.photos.photo;
			$scope.searchTerm = null;
		});
	}
}]);