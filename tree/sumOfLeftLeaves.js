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
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  helper(root);
  return sum;

  function helper(root) {
    if (root === null) {
      return;
    }
    if (root.left) {
      if (root.left.left === null && root.left.right === null) {
        sum += root.left.val;
      }
    }
    helper(root.left);
    helper(root.right);
  }
};
