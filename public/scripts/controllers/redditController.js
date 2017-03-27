myApp.controller('redditController', ['$scope', '$http', function($scope, $http, $interval) {
    console.log('reddit Controller');
    //url to hit
    var getURL = 'http://www.reddit.com/r/churning/hot.json';
    var random = 'http://www.reddit.com/r/churning/random.json';

    //global arrays
    $scope.urlArray = [];
    $scope.titleArray = [];
    $scope.randomArray = [];
    $scope.c = [];

    $scope.getReddit = function() {
        //hit Reddit API
        $http({
            method: 'GET',
            url: getURL
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


    $scope.randomReddit = function(){
      $http({
        method: 'GET',
        url: random
      }).then(function(response){
          console.log(response.data, 'res');
          $scope.b = response.data;
          console.log($scope.b, 'b');
      });//end then
    };//end scope random reddit
}]); //end controller
