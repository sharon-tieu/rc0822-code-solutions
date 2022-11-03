/* exported invert */
// write a function that will reassign the original properties to the value of its value and vice versa of the source object
// the return value is an object so assign a variable to an empty object
// use a for in loop to access the properties of the original source object
// source[key] are the original properties that will be the new value. assign a new variable to this.
// reassign the original values to be the used as the new keys for the object
// rearrange the new variables so that the original keys are now the new values and vice versa
// this will look like:
//    newObject[newKey] = newValue;
// return the new object

function invert(source) {
  var newObject = {};
  for (var key in source) {
    var newValue = source[key];
    newValue = key;
    var newKey = source[key];
    newObject[newKey] = newValue;
  }
  return newObject;
}
