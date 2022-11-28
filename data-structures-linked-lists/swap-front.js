/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const newHead = list.next;
  const third = list.next.next;
  newHead.next = list;
  list.next = third;
  return newHead;
}
