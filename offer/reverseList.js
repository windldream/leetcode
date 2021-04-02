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
// var reverseList = function (head) {
//   let prev = null
//   let cur = head
//   while (cur) {
//     const next = cur.next
//     cur.next = prev
//     prev = cur
//     cur = next
//   }
//   return prev
// }

var reverseList = function (head) {
  if (head === null || head.next === null) return head
  const last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}
