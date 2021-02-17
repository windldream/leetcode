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
var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode()
  let tmp = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tmp.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      tmp.next = new ListNode(l2.val)
      l2 = l2.next
    }
    tmp = tmp.next
  }

  while (l1) {
    tmp.next = new ListNode(l1.val)
    l1 = l1.next
    tmp = tmp.next
  }

  while (l2) {
    tmp.next = new ListNode(l2.val)
    l2 = l2.next
    tmp = tmp.next
  }
  return dummy.next
}
