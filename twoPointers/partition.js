/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let before = new ListNode()
  let after = new ListNode()
  let cur = head
  let prev = before
  let next = after
  while (cur) {
    if (cur.val < x) {
      prev.next = cur
      prev = prev.next
    } else {
      next.next = cur
      next = next.next
    }
    cur = cur.next
  }
  next.next = null
  prev.next = after.next

  return before.next
}
