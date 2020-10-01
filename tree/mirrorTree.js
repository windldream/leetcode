/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root === null) return null
  dfs(root)
  return root

  function dfs(root) {
    if (root === null) return null
    let right = root.right
    if (root.left) {
      root.right = dfs(root.left)
    }
    root.left = dfs(right)
    return root
  }
}
