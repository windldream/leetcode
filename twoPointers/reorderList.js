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
  let l1 = head
  let mid = findMid(head)
  let l2 = reverse(mid)

  while (l2) {
    const next = l1.next
    l1.next = l2
    l2 = l2.next
    l1.next.next = next
    l1 = next
  }

  function findMid(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
    }

    const dummy = slow.next
    slow.next = null

    return dummy
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
