/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let ans = 0
  dfs(root, -Infinity)
  return ans

  function dfs(node, parentVal) {
    if (node === null) return
    if (node.val >= parentVal) {
      ans += 1
    }
    const nextVal = Math.max(node.val, parentVal)
    dfs(node.left, nextVal)
    dfs(node.right, nextVal)
  }
}
