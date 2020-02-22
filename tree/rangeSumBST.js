/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0;
  inorder(root, L, R);
  return sum;

  function inorder(root, L, R) {
    if (root === null) {
      return;
    }
    inorder(root.left, L, R);
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
    if (root.val > R) {
      return;
    }
    inorder(root.right, L, R);
  }
};
