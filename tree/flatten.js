/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  while (root !== null) {
    if (root.left === null) {
      root = root.right;
    } else {
      let pre = root.left;
      while (pre.right !== null) {
        pre = pre.right;
      }
      pre.right = root.right;
      root.right = root.left;
      root.left = null;

      root = root.right;
    }
  }
};
