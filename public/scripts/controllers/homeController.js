myApp.controller('homeController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('home Controller');
    $scope.loggedIn = false;
    $scope.loggedOut = true;

    $scope.init = function() {
        $scope.loggedIn = true;
        $scope.loggedOut = false;
    }
}]);
