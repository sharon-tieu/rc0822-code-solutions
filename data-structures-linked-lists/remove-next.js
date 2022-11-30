/* exported removeNext */

function removeNext(list) {
  // save the second node in a variable
  // if the second node is null, then just return
  // if there is a second node, that will be replace it with the third node, 'next'
  const secondNode = list.next;
  if (secondNode === null) return;
  list.next = secondNode.next;
}
