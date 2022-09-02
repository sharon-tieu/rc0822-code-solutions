/* exported toObject */
// write a function that will restructure the elements of an array into the structure of an object
// the return value is an object so assign a variable to an empty object
// first element of the array will be the key and assign it a new variable
// second element of the array will be the value and assign it a new variable
// the structure of an object is object[key] = value . restructure the new variables to look like an object
// return object

// function toObject(keyValuePair) {
//   var object = {};
//   var key = keyValuePair[0];
//   var value = keyValuePair[1];
//   object[key] = value;
//   return object;
// }

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}