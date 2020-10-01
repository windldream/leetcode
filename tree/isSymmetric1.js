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
  return dfs(root, root)

  function dfs(l, r) {
    if (l === null && r === null) return true
    if (l === null || r === null) return false
    if (l.val !== r.val) return false
    return dfs(l.left, r.right) && dfs(l.right, r.left)
  }
}
