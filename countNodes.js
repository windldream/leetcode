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
var countNodes = function(root) {
  let res = 0;
  helper(root);
  return res;

  function helper(root) {
    if (root === null) {
      return res;
    }
    res += 1;
    helper(root.left);
    helper(root.right);
  }
};
