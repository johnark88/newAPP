myApp.controller('homeController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('home Controller');
    var getURL = 'http://www.reddit.com/r/churning/hot.json';
    $scope.urlArray = [];
    $scope.titleArray = [];

    $scope.getReddit = function() {
        $http({
            method: 'GET',
            url: getURL
        }).then(function(response) {
            console.log('response', response.data);
            $scope.a = response.data;
            $scope.churningHot = $scope.a.data.children;

            angular.forEach($scope.churningHot, function(item) {
                $scope.titleArray.push(item.data.title);
                $scope.urlArray.push(item.data.url);
            });
        });

    };
}]);
