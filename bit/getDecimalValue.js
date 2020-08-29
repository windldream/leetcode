/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let cur = head
  let str = ''
  while (cur) {
    str += cur.val
    cur = cur.next
  }
  return parseInt(str, 2)
}
