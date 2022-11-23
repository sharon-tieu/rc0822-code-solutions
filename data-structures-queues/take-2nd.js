/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstItem = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstItem;
  }
  queue.enqueue(firstItem);
  const secondItem = queue.dequeue();
  return secondItem;
}
