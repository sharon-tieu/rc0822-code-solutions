/* exported getValues */

// write a function that will return the values of the key property in object.
// use a for in loop to access the value of keys
// return value will be the values of the keys

function getValues(object) {
  var newArray = [];
  for (var values in object) {
    newArray.push(object[values]);
  }
  return newArray;
}
