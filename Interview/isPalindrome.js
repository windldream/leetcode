/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   const nodeArr = []
//   while (head) {
//     nodeArr.push(head.val)
//     head = head.next
//   }

//   let l = 0
//   let r = nodeArr.length - 1
//   while (l < r) {
//     if (nodeArr[l++] !== nodeArr[r--]) return false
//   }
//   return true
// }

var isPalindrome = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let pre = null
  while (slow) {
    const next = slow.next
    slow.next = pre
    pre = slow
    slow = next
  }

  let cur = head
  while (pre) {
    if (pre.val !== cur.val) return false
    pre = pre.next
    cur = cur.next
  }
  return true
}
