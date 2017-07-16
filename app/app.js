var userModule = angular.module('userModule', ['ngRoute']);

userModule.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.htm"
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

    $http.get('data/sample-data.json').then(function(response) {
        $scope.users = response.data;
    });

});