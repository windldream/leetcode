/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = [];
  helper(root);
  return res;

  function helper(root) {
    if (root === null) {
      return res;
    }
    res.push(root.val);
    helper(root.left);
    helper(root.right);
  }
};
