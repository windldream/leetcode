/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function(head, k) {
  const list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }

  const len = list.length
  ;[list[k - 1], list[len - k]] = [list[len - k], list[k - 1]]

  const dummy = new ListNode()
  let tmp = dummy
  for (let i = 0; i < len; i++) {
    tmp.next = new ListNode(list[i])
    tmp = tmp.next
  }
  return dummy.next
};