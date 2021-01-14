/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function(head, k) {
  let cur = head
  let first = head
  let last = head
  let count = 1
  while (cur.next) {
    if (count < k) {
      first = first.next
    } else {
      last = last.next
    }
    count += 1
    cur = cur.next
  }

  const val = first.val
  first.val = last.val
  last.val = val
  return head
};