/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null
  let listA = headA
  let listB = headB
  while (listA !== listB) {
    listA = listA ? listA.next : headB
    listB = listB ? listB.next : headA
  }
  return listA
}
