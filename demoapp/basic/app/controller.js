angular.module('myApp')
	.controller('PostCtrl', function($scope){
		$scope.title = "Welcome to My Blog";
		$scope.posts = [
			{id:1,title:'Angular Awesome', date:'10 Juni 2015',author:'Syamsul',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illo reprehenderit, tempore provident adipisci repellendus minima corporis quisquam impedit rem at fuga id inventore perferendis iusto molestiae minus veritatis quos!'},
			{id:2,title:'My First Post', date:'8 Maret 2015',author:'Syamsul',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illo reprehenderit, tempore provident adipisci repellendus minima corporis quisquam impedit rem at fuga id inventore perferendis iusto molestiae minus veritatis quos!'}
		];
	})
	.controller('SinglePostCtrl', function($scope, $routeParams){
		var posts = [
			{id:1,title:'Angular Awesome', date:'10 Juni 2015',author:'Syamsul',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illo reprehenderit, tempore provident adipisci repellendus minima corporis quisquam impedit rem at fuga id inventore perferendis iusto molestiae minus veritatis quos!'},
			{id:2,title:'My First Post', date:'8 Maret 2015',author:'Syamsul',content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illo reprehenderit, tempore provident adipisci repellendus minima corporis quisquam impedit rem at fuga id inventore perferendis iusto molestiae minus veritatis quos!'}
		];

		posts.forEach(function(post){
			if (post.id == $routeParams.id){
				return $scope.blog = post;
			}
		});
	});