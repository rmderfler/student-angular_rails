studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.StudentsFactory = StudentsFactory;
  $scope.students = StudentsFactory.students;
  $scope.newStudent = {};

  $scope.getStudents = (function() {
    StudentsFactory.getStudents()
      .success(function(data) {
        $scope.students = data;
    })
  })();

  $scope.addStudent = function() {
    StudentsFactory.addStudent(StudentsFactory.studentName)
      .success(function(data) {
      $scope.students.push({name: StudentsFactory.studentName});
      console.log($scope.students);
      console.log(StudentsFactory.studentName);
       StudentsFactory.studentName = null;
    })
  }
});

