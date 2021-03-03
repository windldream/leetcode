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
// var detectCycle = function (head) {
//   const val = Symbol.for('random')
//   while (head) {
//     if (head.random === val) {
//       delete head.random
//       return head
//     }
//     head.random = val
//     head = head.next
//   }
//   return null
// }

var detectCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      fast = head
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
  }
  return null
}
