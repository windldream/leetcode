/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (head === null) {
    return head;
  }

  const pseudoNode = new Node(0, null, head, null);
  dfs(pseudoNode, head);
  pseudoNode.next.prev = null;
  return pseudoNode.next;

  function dfs(prev, curr) {
    if (curr === null) {
      return prev;
    }
    prev.next = curr;
    curr.prev = prev;
    const tempNext = curr.next;
    const tail = dfs(curr, curr.child);
    curr.child = null;
    return dfs(tail, tempNext);
  }
};
