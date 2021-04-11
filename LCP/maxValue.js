/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var maxValue = function (root, k) {
  const dp = dfs(root, k)
  return Math.max(...dp)

  function dfs(root, k) {
    const dp = Array(k + 1).fill(0)
    if (root === null) return dp
    const l = dfs(root.left, k)
    const r = dfs(root.right, k)
    let lmax = Math.max(...l)
    let rmax = Math.max(...r)
    // 当前节点不染色
    dp[0] = lmax + rmax
    // 当前节点染色
    for (let i = 1; i <= k; i++) {
      for (let j = 0; j < i; j++) {
        dp[i] = Math.max(dp[i], root.val + l[j] + r[i - j - 1])
      }
    }
    return dp
  }
}

//
