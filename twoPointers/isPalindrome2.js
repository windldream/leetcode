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
var isPalindrome = function (head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let l = 0
  let r = arr.length - 1
  while (l < r) {
    if (arr[l++] !== arr[r--]) return false
  }
  return true
}
