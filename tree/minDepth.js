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
var minDepth = function(root) {
  return helper(root);

  function helper(root) {
    if (root === null) {
      return 0;
    }
    const l = helper(root.left);
    const r = helper(root.right);

    return l && r ? Math.min(l, r) + 1 : 1 + l + r;
  }
};
