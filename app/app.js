var userModule = angular.module('userModule', ['ngRoute', 'ngMap', 'ngAnimate']);

userModule.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/home", {
            templateUrl: "views/home.html"
        })
        .when("/catalog", {
            templateUrl: "views/catalog.html",
            controller: 'userModuleCtrlMain'
        })
        .otherwise("/home");
});

userModule.controller('userModuleCtrlMain', function($scope, $http) {
    $scope.userViewInfo = "Chose a user to dispaly";
    $scope.userViewStart = true;
    $scope.getUser = function(user) {
        $scope.userView = user;
        $scope.userViewInfo = "";
        $scope.userViewStart = false;
    };

    $http.get('data/sample-data (1) (1) (1) (1).json').then(function(response) {
        $scope.users = response.data;
    });

});

userModule.controller('userModuleCtrlMap', function(NgMap) {
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
});