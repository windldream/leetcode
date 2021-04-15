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
// var removeDuplicateNodes = function (head) {
//   const seen = new Set()
//   const dummy = new ListNode()
//   let prev = dummy
//   remove(head)
//   return dummy.next

//   function remove(head) {
//     if (head === null) return
//     if (seen.has(head.val)) {
//       remove(head.next)
//     } else {
//       prev.next = new ListNode(head.val)
//       prev = prev.next
//       seen.add(head.val)
//       remove(head.next)
//     }
//   }
// }

// var removeDuplicateNodes = function (head) {
//   const seen = new Set()
//   const dummy = new ListNode()
//   dummy.next = head
//   let pre = dummy
//   while (pre.next) {
//     if (!seen.has(pre.next.val)) {
//       seen.add(pre.next.val)
//       pre = pre.next
//     } else {
//       pre.next = pre.next.next
//     }
//   }
//   return dummy.next
// }

var removeDuplicateNodes = function (head) {
  if (head === null) return head
  const dummy = new ListNode()
  dummy.next = head
  let pre = dummy
  while (pre.next) {
    let cur = pre.next
    while (cur.next) {
      if (pre.next.val === cur.next.val) {
        cur.next = cur.next.next
      } else {
        cur = cur.next
      }
    }
    pre = pre.next
  }
  return dummy.next
}
