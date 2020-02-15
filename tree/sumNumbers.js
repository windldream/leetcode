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
var sumNumbers = function(root) {
  let res = 0;
  helper(root, '');

  return res;

  function helper(root, str) {
    if (root === null) {
      return 0;
    }
    str += root.val;
    if (root.left === null && root.right === null) {
      res += +str;
    }
    helper(root.left, str);
    helper(root.right, str);
  }
};
