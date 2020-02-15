/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  return helper(root, 0, sum);

  function helper(root, res, sum) {
    if (root === null) {
      return false;
    }
    res += root.val;
    if (res === sum && root.left === null && root.right === null) {
      return true;
    }
    if (helper(root.left, res, sum)) {
      return true;
    }
    if (helper(root.right, res, sum)) {
      return true;
    }
    return false;
  }
};
