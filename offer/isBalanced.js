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
var isBalanced = function (root) {
  if (root === null) return true
  let ans = true
  dfs(root)
  return ans

  function dfs(root) {
    if (root === null) return 0
    const l = dfs(root.left)
    const r = dfs(root.right)
    if (Math.abs(l - r) > 1) {
      ans = false
      return
    }
    return Math.max(l, r) + 1
  }
}
