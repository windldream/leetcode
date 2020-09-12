/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (head === null) return head
  const seen = new Set()
  let cur = head
  while (cur && cur.next) {
    seen.add(cur.val)
    if (seen.has(cur.next.val)) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}
