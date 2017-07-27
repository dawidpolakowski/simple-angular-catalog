var userModule = angular.module('userModule', ['ngRoute', 'ngMap', 'ngAnimate']);

userModule.factory('userFactory', function($http) {
    return {
        getAllUsers: function() {
            var url = "data/sample-data (1) (1) (1) (1).json";
            return $http.get(url);
        }
    };
});

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

userModule.controller('userModuleCtrlMain', function($scope, userFactory) {

    userFactory.getAllUsers().success(function(users) {$scope.users = users});

    $scope.userViewInfo = "Chose a user to dispaly";
    $scope.userViewStart = true;
    $scope.getUser = function(user) {
        $scope.userView = user;
        $scope.userViewInfo = "";
        $scope.userViewStart = false;
    };

   
});

userModule.controller('userModuleCtrlMap', function(NgMap) {
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
});