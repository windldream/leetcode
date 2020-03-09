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
var isBalanced = function(root) {
  return dfs(root) !== -1;

  function dfs(root) {
    if (root === null) {
      return 0;
    }
    const l = dfs(root.left);
    if (l === -1) {
      return -1;
    }
    const r = dfs(root.right);
    if (r === -1) {
      return -1;
    }
    if (Math.abs(l - r) > 1) {
      return -1;
    } else {
      return Math.max(l, r) + 1;
    }
  }
};
