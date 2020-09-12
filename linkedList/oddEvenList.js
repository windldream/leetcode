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
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head

  let odd = head
  let even = head.next
  let tail = even
  while (odd.next && tail.next) {
    // 奇数节点移位
    odd.next = tail.next
    odd = odd.next
    // 偶数节点移位
    tail.next = odd.next
    tail = tail.next
  }
  odd.next = even
  return head
}
