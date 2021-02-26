/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode()
  let temp = dummy
  let carry = 0
  while (l1 || l2 || carry > 0) {
    let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
    if (sum >= 10) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }
    temp.next = new ListNode(sum)
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    temp = temp.next
  }
  return dummy.next
}
