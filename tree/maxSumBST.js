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
var maxSumBST = function (root) {
  let maxSum = 0
  dfs(root)
  return maxSum

  function dfs(root) {
    if (root === null) return [true, Infinity, -Infinity, 0]
    const left = dfs(root.left)
    const right = dfs(root.right)
    if (!left[0] || !right[0] || root.val >= right[1] || root.val <= left[2]) return [false, 0, 0, 0]

    const curMin = root.left ? left[1] : root.val
    const curMax = root.right ? right[2] : root.val
    const sum = root.val + left[3] + right[3]
    maxSum = Math.max(maxSum, sum)
    return [true, curMin, curMax, sum]
  }
}
