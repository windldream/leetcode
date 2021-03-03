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
// var hasCycle = function (head) {
//   if (head === null) return false
//   let fast = head
//   let slow = head
//   while (fast) {
//     fast = fast.next && fast.next.next
//     if (fast === slow) return true
//     slow = slow.next
//   }
//   return false
// }

// var hasCycle = function (head) {
//   if (head === null) return false
//   const set = new Set()
//   while (head) {
//     if (set.has(head)) return true
//     set.add(head)
//     head = head.next
//   }
//   return false
// }

// var hasCycle = function (head) {
//   if (head === null) return false
//   const val = Symbol.for('random')
//   while (head) {
//     if (head.val === val) return true
//     head.val = val
//     head = head.next
//   }
//   return false
// }

var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  if (head === head.next) return true
  const nextNode = head.next
  head.next = head
  return hasCycle(nextNode)
}
