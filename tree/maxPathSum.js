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
var maxPathSum = function(root) {
  let ret = -Infinity;
  getMaxSum(root);
  return ret;

  function getMaxSum(root) {
    if (root === null) {
      return 0;
    }
    const l = Math.max(0, getMaxSum(root.left));
    const r = Math.max(0, getMaxSum(root.right));
    ret = Math.max(ret, l + r + root.val);

    return Math.max(l, r) + root.val;
  }
};
