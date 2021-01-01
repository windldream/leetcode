/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
const insert = function(head, insertVal) {
  if (head === null) {
    const node = new Node(insertVal)
    node.next = node
    return node
  }

  let prev = head
  let cur = head.next
  let isInsert = false
  while (true) {
    if (prev.val <= insertVal && insertVal <= cur.val) {
      isInsert = true
    } else if (prev.val > cur.val) {
      if (cur.val >= insertVal || insertVal >= prev.val) {
        isInsert = true
      }
    }

    if (isInsert) {
      prev.next = new Node(insertVal, cur)
      return head
    }
    prev = cur
    cur = cur.next
    if (prev === head) break
  }

  prev.next = new Node(insertVal, cur)
  return head
};