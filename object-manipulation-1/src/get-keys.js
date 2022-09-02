/* exported getKeys */

// write a function that will take the keys of an object and make it into an array
// return value is an array so assign a variable to an empty array
// use a for in loop to access the key
// push the key into new array
// return array

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
