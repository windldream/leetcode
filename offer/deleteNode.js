/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var deleteNode = function (head, val) {
//   if (head === null) return head
//   if (head.val === val) return head.next
//   head.next = deleteNode(head.next, val)
//   return head
// }

var deleteNode = function (head, val) {
  if (head === null) return head
  if (head.val === val) return head.next
  let prev = head
  let cur = head.next
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next
      break
    }
    prev = cur
    cur = cur.next
  }
  return head
}
