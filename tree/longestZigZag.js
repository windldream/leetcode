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
var longestZigZag = function (root) {
  if (root === null) return 0
  return Math.max(dfs(root.left, false, 0), dfs(root.right, true, 0))
  function dfs(node, isLeft, len) {
    if (node === null) return len
    console.log(node, isLeft, len)
    if (isLeft) {
      return Math.max(dfs(node.left, false, len + 1), dfs(node.right, true, 0))
    }
    return Math.max(dfs(node.right, true, len + 1), dfs(node.left, false, 0))
  }
}
