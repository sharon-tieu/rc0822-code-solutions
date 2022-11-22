/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = stack.pop();
  while (stack.peek() !== undefined) {
    const checkedValue = stack.pop();
    if (checkedValue > maxValue) {
      maxValue = checkedValue;
    }
  }
  return maxValue;
}
