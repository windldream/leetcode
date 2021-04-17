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
var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode()
  let cur = dummyNode
  let carry = 0
  while (l1 || l2 || carry) {
    let sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }
    cur.next = new ListNode(sum)
    cur = cur.next
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return dummyNode.next
}
