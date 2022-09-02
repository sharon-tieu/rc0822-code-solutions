/* exported getKeys */

// write a function that will return an array of properties in an object.
// assign an empty array to a variable becaue the return value is an array
// loop through object using for in loop
//    establish variable in the object which will be the properties
// push the key variable in array
// return array

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
