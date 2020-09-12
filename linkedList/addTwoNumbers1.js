/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  const arr1 = []
  let cur = l1
  while (cur) {
    arr1.push(cur.val)
    cur = cur.next
  }

  const arr2 = []
  cur = l2
  while (cur) {
    arr2.push(cur.val)
    cur = cur.next
  }

  let m = 0
  let n = 0
  const arr3 = []
  let carry = 0
  while (m < arr1.length || n < arr2.length || carry) {
    let val = (arr1[m] || 0) + (arr2[n] || 0) + carry
    carry = 0
    if (val >= 10) {
      carry = 1
      val = val - 10
    }
    arr3.push(val)
    m++
    n++
  }

  let i = 0
  const dummy = new ListNode()
  let tmp = dummy
  while (i < arr3.length) {
    tmp.next = new ListNode(arr3[i++])
    tmp = tmp.next
  }
  return dummy.next
}
