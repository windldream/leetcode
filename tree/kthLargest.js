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
var kthLargest = function (root, k) {
  let ans = []
  dfs(root)
  return ans[ans.length - k]

  function dfs(root) {
    if (root === null) return
    dfs(root.left)
    ans.push(root.val)
    dfs(root.right)
  }
}
