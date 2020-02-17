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
var diameterOfBinaryTree = function(root) {
  let max = 0;
  helper(root);
  return max;

  function helper(root) {
    if (root === null) {
      return 0;
    }
    const l = helper(root.left);
    const r = helper(root.right);
    max = Math.max(max, l + r);
    return Math.max(l, r) + 1;
  }
};
