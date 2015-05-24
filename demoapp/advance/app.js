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
                        products: ['Products','$timeout',function(Products,$timeout){
                                // return $timeout(function(){
                                        return Products.getAll();
                                // },3000);
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
        .when('/about', {
                templateUrl: 'components/about/about.html',
                controller: 'AboutCtrl'
        })
        .otherwise({
        	redirectTo:'/'
        })
        $locationProvider.html5Mode(true);
}])
.run(['$rootScope', function($rootScope){

        $rootScope.$on('$routeChangeStart', function(){
                $rootScope.isLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', hideLoader);
        $rootScope.$on('$routeChangeError', hideLoader);

        function hideLoader(event, next){
                $rootScope.isLoading = false;
        }
}]);