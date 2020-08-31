/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const seen = new Set()
  while (head) {
    if (seen.has(head)) {
      return true
    } else {
      seen.add(head)
      head = head.next
    }
  }
  return false
}
