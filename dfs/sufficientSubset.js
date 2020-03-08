/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  if (dfs(root, 0, limit)) return null;
  return root;

  function dfs(root, sum, limit) {
    if (root === null) {
      return true;
    }
    sum += root.val;
    if (root.left === null && root.right === null) {
      return sum < limit;
    }
    const l = dfs(root.left, sum, limit);
    const r = dfs(root.right, sum, limit);

    if (l) {
      root.left = null;
    }
    if (r) {
      root.right = null;
    }
    return l && r;
  }
};
