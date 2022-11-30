/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  // console.log('STACK:', stack);
  // console.log('VALUE:', value);

  if (stack.peek() === undefined) {
    return undefined;
  }
  const topOfStack = stack.pop();
  // console.log('topOfStack:', topOfStack);
  stack.push(value);
  stack.push(topOfStack);
  return stack;
}
