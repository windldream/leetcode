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
  if (head === null || head.next === null) return head

  const midNode = getMidNode(head)
  const rightNode = midNode.next
  midNode.next = null

  const left = sortList(head)
  const right = sortList(rightNode)
  return merge(left, right)

  function getMidNode(head) {
    if (head === null || head.next === null) return head

    let slow = head
    let fast = head.next.next
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  function merge(l1, l2) {
    const dummy = new ListNode()
    let cur = dummy
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1
        l1 = l1.next
      } else {
        cur.next = l2
        l2 = l2.next
      }
      cur = cur.next
    }

    cur.next = l1 || l2
    return dummy.next
  }
}
