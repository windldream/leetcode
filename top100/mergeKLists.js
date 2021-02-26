/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const n = lists.length
  if (n === 0) return null
  if (n === 1) return lists[0]
  const mid = n >> 1
  const left = mergeKLists(lists.slice(0, mid))
  const right = mergeKLists(lists.slice(mid))
  return merge(left, right)

  function merge(l1, l2) {
    const dummy = new ListNode()
    let tmp = dummy
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tmp.next = new ListNode(l1.val)
        l1 = l1.next
      } else {
        tmp.next = new ListNode(l2.val)
        l2 = l2.next
      }
      tmp = tmp.next
    }

    if (l1) {
      tmp.next = l1
    }

    if (l2) {
      tmp.next = l2
    }
    return dummy.next
  }
}
