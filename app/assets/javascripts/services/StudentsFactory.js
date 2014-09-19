studentRoster.factory('StudentsFactory', function StudentsFactory($http) {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    factory.students.push({"name": factory.studentName});
    $http.post('/students.json', factory)
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student)
    factory.students.splice(index, 1);
  };

  factory.getStudents = function() {
    return $http.get('/students.json')
  };

  return factory;
});
