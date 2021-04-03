/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null) return l2
//   if (l2 === null) return l1
//   const dummy = new ListNode()
//   let cur = dummy
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       cur.val = l1.val
//       l1 = l1.next
//     } else {
//       cur.val = l2.val
//       l2 = l2.next
//     }
//     if (l1 && l2) {
//       cur.next = new ListNode()
//       cur = cur.next
//     }
//   }

//   cur.next = l1 || l2
//   return dummy
// }

// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null) return l2
//   if (l2 === null) return l1

//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2)
//     return l1
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next)
//     return l2
//   }
// }

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  const dummy = new ListNode()
  let cur = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 || l2
  return dummy.next
}
