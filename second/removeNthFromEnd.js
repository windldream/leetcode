/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head
  while (n > 0) {
    fast = fast.next
    n--
  }
  if (fast === null) return head.next

  let slow = head
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  if (slow.next === null) return slow.next
  slow.next = slow.next.next
  return head
}
