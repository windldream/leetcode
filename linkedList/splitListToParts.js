/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  let len = 0
  let cur = root
  while (cur) {
    cur = cur.next
    len++
  }

  let aver = Math.trunc(len / k)
  let mod = len % k
  cur = root
  const ans = []
  while (k > 0) {
    const dummy = new ListNode()
    let temp = dummy
    for (let i = 0; i < aver + (mod > 0 ? 1 : 0); i++) {
      temp.next = cur ? new ListNode(cur.val) : null
      temp = temp.next
      cur = cur ? cur.next : null
    }
    ans.push(dummy.next)
    k--
    mod--
  }
  return ans
}
