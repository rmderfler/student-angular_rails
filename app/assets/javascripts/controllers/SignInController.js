studentRoster.controller('SignInCtrl', function SignInCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
});
