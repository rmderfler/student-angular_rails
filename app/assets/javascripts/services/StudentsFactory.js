studentRoster.factory('StudentsFactory', function StudentsFactory($http) {
  var factory = {};
  factory.students = [];

  factory.getStudents = function() {
    return $http.get('/students.json')
  };

  factory.addStudent = function() {
    factory.students.push({"name": factory.studentName});
    $http.post('/students.json', factory)
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student)
    factory.students.splice(index, 1);
    $http.delete("/students/" + student.id + ".json")
  };

  factory.updateStudent = function(student) {
    $http.put(("/students/" + student.id + ".json"), student);
  };

  return factory;
});
