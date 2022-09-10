/* exported defaults */
// write a function that will return the key/value pairs of the target object along with the key/value pairs that is also found in source object.
// the return value will be the target object. assign to variable
// special case:
//   if the target object is empty, then return source
// get keys and values of source object
//

function defaults(target, source) {
  // if (target === {}) {
  //   return source;
  // }
  for (var key in source) {
    var value = source[key];
    if (target[key] === undefined) {
      target[key] = value;
    }
  }
  return target;
}
