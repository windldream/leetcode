/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const seen = new Set()
  while (head) {
    if (seen.has(head)) {
      return head
    } else {
      seen.add(head)
      head = head.next
    }
  }
  return null
}
