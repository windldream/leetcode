/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (head === null) return true
  if (root === null) return false
  if (dfs(head, root)) return true
  return isSubPath(head, root.left) || isSubPath(head, root.right)

  function dfs(head, root) {
    if (head === null) return true
    if (root === null) return false
    if (head.val !== root.val) return false
    return dfs(head.next, root.left) || dfs(head.next, root.right)
  }
}
