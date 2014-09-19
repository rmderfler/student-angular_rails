studentRoster.factory('StudentsFactory', function StudentsFactory($http) {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    factory.students.push({"name": factory.studentName});
     
    factory.students.create;
    console.log(factory.students[0]);
    
    $http.post('/students.json', factory)
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student)
    factory.students.splice(index, 1);
  };
  return factory;
});
