myApp.controller('redditController', ['$scope', '$http', function($scope, $http, $interval) {
    console.log('reddit Controller');
    
    //global arrays
    $scope.urlArray = [];
    $scope.titleArray = [];
    $scope.randomArray = [];

    $scope.getReddit = function() {
        //set url based on user input
        var redditUrl = 'http://www.reddit.com/r/' + $scope.subReddit + '/hot.json';
        //hit Reddit API to get top post from a subreddit
        $http({
            method: 'GET',
            url: redditUrl
        }).then(function(response) {
            console.log('response', response.data);
            $scope.a = response.data;
            $scope.churningHot = $scope.a.data.children;
            //gets title and url from JSON object from http call
            angular.forEach($scope.churningHot, function(item) {
                $scope.titleArray.push(item.data.title);
                $scope.urlArray.push(item.data.url);
            }); //end for each
        }); //end then
    }; //end scope dot reddit


    $scope.randomReddit = function() {
        //set url based on user input
        var randomUrl = 'http://www.reddit.com/r/' + $scope.subReddit + '/random.json';
        //hit reddit api to get random post
        $http({
            method: 'GET',
            url: randomUrl
        }).then(function(response) {
            console.log(response.data, 'res');
            $scope.b = response.data;
            console.log($scope.b, 'b');
        }); //end then
    }; //end scope random reddit
}]); //end controller
