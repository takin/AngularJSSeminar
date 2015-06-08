angular.module('myApp',[
        'ngRoute',
        'ngAnimate'
])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

        $routeProvider
        .when('/', {
        	templateUrl: 'components/home/home.html',
        	controller: 'HomeCtrl'
        })
        .when('/products', {
                templateUrl: 'components/products/products.html',
                controller: 'ProductsCtrl',
                resolve: {
                        products: ['Products',function(Products){
                                return Products.getAll();
                        }]
                }
        })
        .when('/product/:id', {
                templateUrl: 'components/product_detail/product_detail.html',
                controller: 'ProductDetailCtrl'
        })
        .when('/customers', {
                templateUrl: 'components/customers/customers.html',
                controller: 'CustomersCtrl',
                resolve: {
                        customers: ['Customers','$timeout',function(Customers,$timeout){
                                return $timeout(function(){
                                        return Customers.getAll();
                                },2000);
                        }]
                }
        })
        .when('/flickr', {
                templateUrl: 'components/flickr/flickr.html',
                controller: 'FlickrCtrl',
                resolve:{
                        getRandomImages: ['FlickrService',function(FlickrService){
                                return FlickrService.search();
                        }]
                }
        })
        .otherwise({
        	redirectTo:'/'
        })


        $locationProvider.html5Mode(true);

}])
.run(['$rootScope', function($rootScope){

        $rootScope.title = 'AngularJS Demo App';

        $rootScope.$on('$routeChangeStart', function(){
                $rootScope.isLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', hideLoader);
        $rootScope.$on('$routeChangeError', hideLoader);

        function hideLoader(event, next){
                $rootScope.isLoading = false;
        }
}]);