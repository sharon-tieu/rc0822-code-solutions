/* exported getFront */

function getFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    return queue.peek();
  }
}
