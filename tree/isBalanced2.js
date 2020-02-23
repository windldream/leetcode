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
  let res = true;
  dfs(root);
  return res;

  function dfs(root) {
    if (root === null) {
      return 0;
    }
    dfs(root.left);
    dfs(root.right);
    const l = getDepth(root.left);
    const r = getDepth(root.right);
    if (Math.abs(l - r) > 1) {
      res = false;
      return;
    }
  }

  function getDepth(root) {
    if (root === null) {
      return 0;
    }
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
  }
};
