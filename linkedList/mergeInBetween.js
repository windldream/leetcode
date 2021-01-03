/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let count = 0
  let dummy = new ListNode()
  let ans = dummy
  while (list1) {
    if (count < a) {
      dummy.next = new ListNode(list1.val)
      dummy = dummy.next
    } else if (count === a) {
      while (list2) {
        dummy.next = new ListNode(list2.val)
        dummy = dummy.next
        list2 = list2.next
      }
    } else if (count > b) {
      dummy.next = new ListNode(list1.val)
      dummy = dummy.next
    }
    list1 = list1.next
  }
  return ans.next
};