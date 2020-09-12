/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  let ans = 0
  let cur = head
  while (cur) {
    if (G.includes(cur.val) && (cur.next === null || !G.includes(cur.next.val))) {
      ans++
    }
    cur = cur.next
  }
  return ans
}
