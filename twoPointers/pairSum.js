/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let midNode = findNode(head)
  let dummyNode = reverse(head)
  let max = 0

  while (dummyNode) {
    max = Math.max(max, dummyNode.val + midNode.val)
    dummyNode = dummyNode.next
    midNode = midNode.next
  }

  return max

  function findNode(head) {
    let fast = head
    let slow = head

    while (fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
    }

    const mid = slow.next
    slow.next = null

    return mid
  }

  function reverse(head) {
    let pre = null
    let cur = head

    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }

    return pre
  }
}
