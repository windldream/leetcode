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
  const oddNodes = []
  const evenNodes = []
  let index = 1
  let cur = head
  while (cur) {
    if (index & 1) {
      oddNodes.push(cur.val)
    } else {
      evenNodes.push(cur.val)
    }
    cur = cur.next
    index++
  }

  const dummy = new ListNode()
  let tmp = dummy
  for (const val of [...oddNodes, ...evenNodes]) {
    tmp.next = new ListNode(val)
    tmp = tmp.next
  }
  return dummy.next
}
