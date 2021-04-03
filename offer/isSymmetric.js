/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true
  return check(root.left, root.right)

  function check(a, b) {
    if (a === null && b === null) return true
    if (a === null || b === null) return false
    if (a.val !== b.val) return false
    return check(a.left, b.right) && check(a.right, b.left)
  }
}
