/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const headList = []

  while (head) {
    headList.push(head.val)
    head = head.next
  }

  let l = 0
  let r = headList.length - 1

  while (l < r) {
    if (headList[l++] !== headList[r--]) return false
  }

  return true
}
