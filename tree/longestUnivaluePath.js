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
var longestUnivaluePath = function(root) {
  let max = 0;
  if (root === null) {
    return 0;
  }
  getMax(root, root.val);
  return max;

  function getMax(root, val) {
    if (root === null) {
      return 0;
    }
    const l = getMax(root.left, root.val);
    const r = getMax(root.right, root.val);
    max = Math.max(max, l + r);
    if (root.val === val) {
      return Math.max(l, r) + 1;
    }
    return 0;
  }
};
