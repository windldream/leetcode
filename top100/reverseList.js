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
// var reverseList = function (head) {
//   if (head === null || head.next === null) return head
//   const last = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return last
// }

var reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}

// 1 -> 2 -> 3
// 1 -> null
// cur = 1 -> null
// head
