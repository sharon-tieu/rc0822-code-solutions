/* exported omit */
// write a function that will return the properties of source that is NOT included in the keys array.
// assign source to a variable
//
function omit(source, keys) {
  var object = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      object[key] = source[key];
    }
  }
  return object;
}
