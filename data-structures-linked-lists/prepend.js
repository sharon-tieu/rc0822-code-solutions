/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const head = new LinkedList(value);
  // console.log('head:', head);
  head.next = list;
  return head;
}
