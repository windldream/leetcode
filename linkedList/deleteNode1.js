/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let cur = head
  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return head
}
