/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function (head) {
//   if (head === null || head.next === null) return head

//   let next = head.next
//   if (next.val === head.val) {
//     while (next && next.val === head.val) {
//       next = next.next
//     }
//     head = deleteDuplicates(next)
//   } else {
//     head.next = deleteDuplicates(next)
//   }
//   return head
// }

var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head

  const dummy = new ListNode()
  let tail = dummy
  while (head) {
    if (head.next === null || head.val !== head.next.val) {
      tail.next = head
      tail = head
    }
    while (head.next && head.val === head.next.val) head = head.next
    head = head.next
  }
  tail.next = null
  return dummy.next
}
