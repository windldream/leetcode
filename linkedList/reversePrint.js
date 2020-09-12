/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    const nextNode = cur.next
    cur.next = pre
    pre = cur
    cur = nextNode
  }

  const ans = []
  while (pre) {
    ans.push(pre.val)
    pre = pre.next
  }
  return ans
}
