/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head
  let fast = head && head.next
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let prev = null
  while (slow) {
    const next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }

  while (prev && head) {
    if (prev.val !== head.val) return false
    prev = prev.next
    head = head.next
  }
  return true
}
