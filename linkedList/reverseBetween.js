/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dummy = new ListNode()
  dummy.next = head

  let g = dummy
  let p = dummy.next
  for (let i = 1; i < m; i++) {
    g = g.next
    p = p.next
  }

  for (let i = m; i < n; i++) {
    // 先删除节点
    // 然后再插入节点
    const removed = p.next
    p.next = p.next.next
    removed.next = g.next
    g.next = removed
  }
  return dummy.next
}
