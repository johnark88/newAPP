console.log('js here');
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "/views/home.html",
    }).
    when("/source", {
        templateUrl: "/views/source.html",
        controller: "sourceController"
    }).
    otherwise({
        redirectTo: "/"
    });
}]);

myApp.controller('index', ['$scope', function($scope) {
    console.log('Angular');
}]);
