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
  l1 = reverse(l1)
  l2 = reverse(l2)

  let dummyNode = new ListNode()
  let cur = dummyNode
  let carry = 0

  while (l1 || l2 || carry) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    if (val >= 10) {
      val -= 10
      carry = 1
    } else {
      carry = 0
    }

    cur.val = val
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    cur.next = new ListNode()
    cur = cur.next
  }

  dummyNode = reverse(dummyNode)

  return dummyNode.next

  function reverse(node) {
    let pre = null
    let cur = node

    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }

    return pre
  }
}
