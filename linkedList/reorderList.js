/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null) return

  let slow = head
  let fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let reverseNode = slow.next
  slow.next = null
  reverseNode = reverse(reverseNode)

  let cur = head
  while (cur && reverseNode) {
    const curSecond = reverseNode
    reverseNode = reverseNode.next
    const nextCur = cur.next
    curSecond.next = nextCur
    cur.next = curSecond
    cur = nextCur
  }

  function reverse(head) {
    if (head.next === null) return head
    const last = reverse(head.next)
    head.next.next = head
    head.next = null
    return last
  }
}
