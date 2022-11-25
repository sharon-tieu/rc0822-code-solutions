/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  // save the second node into a variable called const next.
  // reassign list.next into a new node that we are going to create with the value that was passed
  // if the second node was previously null, then do nothing.
  // if it is NOT null, then that means it has a value so then we will have to update list.next.next which is the next of the new node we created and set it to what was previously the second node, making it the third node in the list
  const next = list.next;
  list.next = new LinkedList(value);
  if (next !== null) {
    list.next.next = next;
  }
}
