angular.module('myApp',['ngRoute','ngAnimate'])
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
                        products: ['Products', function(Products){
                                return Products.getAll();
                        }]
                }
        })
        .when('/product/:id', {
                templateUrl: 'components/product_detail/product_detail.html',
                controller: 'ProductDetailCtrl'
        })
        .when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'AboutCtrl'
        })
        .otherwise({
        	redirectTo:'/'
        })
        $locationProvider.html5Mode(true);
}]);