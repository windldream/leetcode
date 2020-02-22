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
var distributeCoins = function(root) {
  let res = 0;
  dfs(root);
  return res;

  function dfs(root) {
    if (root === null) {
      return 0;
    }
    const l = dfs(root.left);
    const r = dfs(root.right);
    res += Math.abs(l) + Math.abs(r);
    return root.val + l + r - 1;
  }
};
