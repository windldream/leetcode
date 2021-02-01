/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var navigation = function (root) {
  let ans = 0
  let s = 1
  const l = dfs(root.left)
  const r = dfs(root.right)
  return ans + (l && r ? 0 : s)

  function dfs(root) {
    if (root === null) return 0
    const l = dfs(root.left)
    const r = dfs(root.right)
    if (root.left && root.right) {
      ans += !l && !r
      s = !(l && r)
      return 1
    }
    return l || r
  }
}
