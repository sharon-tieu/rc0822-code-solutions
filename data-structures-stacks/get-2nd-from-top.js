/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  // console.log('stack:', stack);
  if (stack.peek() === undefined) {
    return undefined;
  }
  const firstFromTop = stack.pop();
  // console.log('firstFromTop:', firstFromTop);
  const secondFromTop = stack.peek();
  // console.log('secondFromTop:', secondFromTop);
  stack.push(firstFromTop);
  return secondFromTop;
}
