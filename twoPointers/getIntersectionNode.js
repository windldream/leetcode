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
  let tempA = headA
  let tempB = headB

  while (tempA !== tempB) {
    tempA = tempA ? tempA.next : headB
    tempB = tempB ? tempB.next : headA
  }

  return tempA
}
