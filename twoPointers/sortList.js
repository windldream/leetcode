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
var sortList = function (head) {
  const list = getListVal(head)
  const dummyNode = new ListNode()
  let temp = dummyNode

  for (const val of list) {
    temp.next = new ListNode(val)
    temp = temp.next
  }

  return dummyNode.next

  function getListVal(head) {
    const list = []

    while (head) {
      list.push(head.val)
      head = head.next
    }

    return list.sort((a, b) => a - b)
  }
}
