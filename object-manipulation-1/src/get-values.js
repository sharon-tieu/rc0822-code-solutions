/* exported getValues */

// write a function that will make an array of properties found inside an object.
// return value is an array so assign an empty array to a variable
// access the value of the key in object by using bracket notation because
//    value = object[key]
// push the value into the array
// return array

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}