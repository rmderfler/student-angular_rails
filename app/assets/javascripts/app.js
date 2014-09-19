var studentRoster = angular.module('studentRoster', ['ngRoute', 'templates']);

studentRoster.config(function ($routeProvider) {
 $routeProvider
    .when('/',
      {
        controller: 'StudentsCtrl',
        templateUrl: 'Students.html'
      })

     .when('/sign-in',
        {
          controller: 'SignInCtrl',
          templateUrl: 'SignIn.html'
        })
 });
