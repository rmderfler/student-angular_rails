studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.getStudents = (function() {
    StudentsFactory.getStudents()
      .success(function(data) {
        $scope.students = data;
    })
  })();
});

