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
//   let fast = head
//   let slow = head
//   while (fast && fast.next) {
//     fast = fast.next.next
//     slow = slow.next
//     if (fast === slow) {
//       fast = head
//       while (slow !== fast) {
//         slow = slow.next
//         fast = fast.next
//       }
//       return fast
//     }
//   }
//   return null
// }

var detectCycle = function (head) {
  const set = new Set()
  while (head) {
    if (set.has(head)) return head
    set.add(head)
    head = head.next
  }
  return null
}
