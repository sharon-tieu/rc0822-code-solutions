/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const next = list.next;
  const nextAfter = list.next.next;
  next.next = list;
  list.next = nextAfter;
  return next;
}
