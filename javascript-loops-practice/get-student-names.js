/* exported getStudentNames */
// write a function that will obtain the values of the students' names from an object.
// the return value will be an array of strings which are the values of the object's properties
// establish a new variable to an empty array
// use a for loop to loop through the array of students
//   initialization: being at index 0 for the first name
//   condition: as long as we reach the end of the loop so i < students.length
//   final expression: increment to the next index: i++
// push the string values into empty array
// return the array

function getStudentNames(students) {
  var nameValues = [];
  for (var i = 0; i < students.length; i++) {
    nameValues.push(students[i].name);
  }
  return nameValues;
}
