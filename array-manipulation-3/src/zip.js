/* exported zip */
function zip(first, second) {
  var newArray = [];
  var shorter = first.length < second.length ? first : second;
  // iterate through shorter
  for (var i = 0; i < shorter.length; i++) {
    var zip = [first[i], second[i]];
    newArray.push(zip);
  }
  return newArray;
}
