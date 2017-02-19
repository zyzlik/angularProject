var app = angular.module('SuggestionBox', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html' 
        })
        .otherwise({
            redirectTo: '/'
        });
});