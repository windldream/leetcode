/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let g = dummyHead
  let p = dummyHead.next
  for (let i = 1; i < left; i++) {
    g = g.next
    p = p.next
  }
  for (let i = left; i < right; i++) {
    // 移除removed
    const removed = p.next
    p.next = p.next.next

    removed.next = g.next
    g.next = removed
  }
  return dummyHead.next
}

// 1 -> 2 -> 3 -> 4 -> 5 -> null

// 2 -> 3 -> 4 -> 5 -> null    next
// 3 -> 4 -> 5 -> null         next.next
// 1 -> 3 -> 4 -> 5 -> null head
//
