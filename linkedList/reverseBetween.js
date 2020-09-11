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
  let count = 0
  let cur = head
  const arr = []
  while (cur) {
    count++
    if (count >= m && count <= n) {
      arr.push(cur.val)
    }
    cur = cur.next
  }

  arr.reverse()
  const pre = new ListNode()
  let tmp = pre
  count = 0
  cur = head
  let i = 0
  while (cur) {
    count++
    if (count >= m && count <= n) {
      tmp.next = new ListNode(arr[i++])
    } else {
      tmp.next = new ListNode(cur.val)
    }
    tmp = tmp.next
    cur = cur.next
  }
  return pre.next
}
