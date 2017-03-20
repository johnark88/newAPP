console.log('js here');
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "/views/home.html",
    }).
    when("/maps", {
        templateUrl: "/views/maps.html",
        controller: "mapsController"
    }).
    otherwise({
        redirectTo: "/"
    });
}]);

myApp.controller('index', ['$scope', function($scope) {
    console.log('Angular');
}]);
