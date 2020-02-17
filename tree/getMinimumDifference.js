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
var getMinimumDifference = function(root) {
  let min = Infinity;
  let pre = -1;
  inorder(root);
  return min;

  function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.left);
    if (pre !== -1) {
      min = Math.min(Math.abs(pre - root.val), min);
    }
    pre = root.val;
    inorder(root.right);
  }
};
