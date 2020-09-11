/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummy = new ListNode()
  dummy.next = head
  let pre = dummy
  for (let i = 1; i < m; i++) {
    pre = pre.next
  }
  head = pre.next
  for (let i = m; i < n; i++) {
    const nex = head.next
    head.next = nex.next
    nex.next = pre.next
    pre.next = nex
  }
  return dummy.next
}
