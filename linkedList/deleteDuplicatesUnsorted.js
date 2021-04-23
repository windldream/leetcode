/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function (head) {
  const map = new Map()
  let cur = head
  while (cur) {
    map.set(cur.val, (map.get(cur.val) || 0) + 1)
    cur = cur.next
  }

  const dummyHead = new ListNode()
  let tmp = dummyHead
  while (head) {
    if (map.get(head.val) === 1) {
      tmp.next = new ListNode(head.val)
      tmp = tmp.next
    }
    head = head.next
  }
  return dummyHead.next
}
