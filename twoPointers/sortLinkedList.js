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
var sortLinkedList = function (head) {
  const linkedList = getLinkedList(head)
  const dummyNode = new ListNode()
  let cur = dummyNode

  for (const val of linkedList) {
    cur.next = new ListNode(val)
    cur = cur.next
  }

  return dummyNode.next

  function getLinkedList(head) {
    const list = []

    while (head) {
      list.push(head.val)
      head = head.next
    }

    return list.sort((a, b) => a - b)
  }
}
