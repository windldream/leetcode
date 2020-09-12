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
  if (l1.val === 0) return l2
  if (l2.val === 0) return l1

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

  let m = arr1.length - 1
  let n = arr2.length - 1
  const arr3 = []
  let carry = 0
  while (m >= 0 && n >= 0) {
    let val = arr1[m] + arr2[n] + carry
    carry = 0
    if (val >= 10) {
      carry = 1
      val = val - 10
    }
    arr3.push(val)
    m--
    n--
  }

  while (m >= 0) {
    let val = arr1[m] + carry
    carry = 0
    if (val >= 10) {
      carry = 1
      val = val - 10
    }
    arr3.push(val)
    m--
  }

  while (n >= 0) {
    let val = arr2[n] + carry
    carry = 0
    if (val >= 10) {
      carry = 1
      val = val - 10
    }
    arr3.push(val)
    n--
  }

  if (carry) {
    arr3.push(carry)
  }

  let i = arr3.length - 1
  const dummy = new ListNode()
  let tmp = dummy
  while (i >= 0) {
    tmp.next = new ListNode(arr3[i--])
    tmp = tmp.next
  }
  return dummy.next
}
