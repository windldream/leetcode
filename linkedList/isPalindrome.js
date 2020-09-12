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
var isPalindrome = function (head) {
  if (head === null) return true

  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let pre = null
  while (slow) {
    const nextNode = slow.next
    slow.next = pre
    pre = slow
    slow = nextNode
  }

  let node = head
  while (pre) {
    if (pre.val !== node.val) return false
    pre = pre.next
    node = node.next
  }
  return true
}
