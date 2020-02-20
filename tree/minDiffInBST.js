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
var minDiffInBST = function(root) {
  let min = Infinity,
    pre;
  inorder(root);
  return min;

  function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.left);
    if (pre) {
      min = Math.min(min, root.val - pre);
    }
    pre = root.val;
    inorder(root.right);
  }
};
