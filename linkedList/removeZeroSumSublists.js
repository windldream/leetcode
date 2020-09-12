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
var removeZeroSumSublists = function (head) {
  if (head === null) return head
  let cur = head
  let sum = 0
  while (cur) {
    sum += cur.val
    cur = cur.next
    if (sum === 0) {
      return removeZeroSumSublists(cur)
    }
  }
  head.next = removeZeroSumSublists(head.next)
  return head
}
