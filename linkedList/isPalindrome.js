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
  const ans = []
  while (head) {
    ans.push(head.val)
    head = head.next
  }
  return ans.join('') === ans.reverse().join('')
}
