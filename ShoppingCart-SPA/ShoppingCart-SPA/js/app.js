var myApp = angular.module('myApp',["ngRoute",'controllers']);

myApp.config(function($routeProvider) {
        $routeProvider.
		when('/login', {
            templateUrl: 'login',
			controller: 'LoginCtrl'
        }).
        when('/home', {
            templateUrl: 'partials/home.html'
        }).
        when('/list', {
            templateUrl: 'partials/list.html',
			controller:'ItemCtrl'
        }).
        when('/cart', {
            templateUrl: 'partials/cart.html',
			controller:'ItemCtrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
    });