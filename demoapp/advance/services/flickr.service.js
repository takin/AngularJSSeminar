angular.module('myApp')
.factory('FlickrService', ['$http', function($http){

	var flickrApi = 'https://api.flickr.com/services/rest/?api_key=5e66b9843f0dfb0baaf95fe015a825a8&format=json&nojsoncallback=1&per_page=50';

	return {
		search: function(text){
			return $http.get(flickrApi + '&text='+text + '&method=flickr.photos.search');
		}
	}
}]);