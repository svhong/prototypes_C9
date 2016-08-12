// Create the route module and name it routeApp
var app = angular.module("routeApp",['ngRoute']);
// Config the routes
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "pages/home.html",
            // route for the home page
            controller: 'mainController'
        })
        .when('/about',{
            templateUrl: "pages/about.html",
            // route for the about page
            controller: 'aboutController'
        })
        .when('/contact',{
            templateUrl: "pages/contact.html",
            // route for the contact page
            controller: 'contactController'
        })
        .otherwise({
           redirectTo: '/'
        });
    // Create the controllers for the different pages below
}).controller('mainController',function($scope){
    // home page controller
    // Create a message to display in the view
    $scope.message = "HEY WELCOME HOME";
}).controller('aboutController',function($scope) {
    // about page controller
    // Create a message to display in the view
    $scope.message = "LEARN MORE ABOUT ME";
}).controller('contactController',function($scope) {
    // contact page controller
    // Create a message to display in the view
    $scope.message = "CALL ME!";
});









