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
var nextLargerNodes = function (head) {
  const res = []
  const cur = head
  while (cur.next) {
    res.push(cur.val)
    cur = cur.next
  }

  const ans = Array(res.length).fill(0)
  const stack = []
  for (let i = res.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length] <= res[i]) {
      stack.pop()
    }
    ans[i] = stack.length ? stack[stack.length - 1] : 0
    stack.push(res[i])
  }
  return res
}
