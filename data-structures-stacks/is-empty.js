/* exported isEmpty */

function isEmpty(stack) {
  if (stack.peek() === undefined) {
    return true;
  }
  if (stack === '') {
    return true;
  } else {
    return false;
  }
}
