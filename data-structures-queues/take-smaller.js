/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (typeof first === 'undefined') {
    return;
  }
  const second = queue.dequeue();
  if (typeof second === 'undefined') {
    return first;
  }
  if (first > second) {
    queue.enqueue(first);
    return second;
  }
  queue.enqueue(second);
  return first;
}
