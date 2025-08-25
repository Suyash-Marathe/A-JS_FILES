var app = angular.module("myapp", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'Home.html',
            controller: 'HomeController'

        })

        .when('/about', {

            templateUrl: 'About.html',
            controller: 'AboutController'
        })
        .otherwise({
            template: '<h1>Select Option !</h1>'
        });
});

app.controller('HomeController', function ($scope) {

    $scope.message = "This is Home Page !!";
});
app.controller('AboutController', function ($scope) {

    $scope.message = "This is About Page !!";
});