/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const res = [];
  helper(root, '');
  return res;

  function helper(root, str) {
    if (root === null) {
      return;
    }
    str = (str ? str + '->' : '') + root.val;
    if (root.left === null && root.right === null) {
      res.push(str);
    }
    helper(root.left, str);
    helper(root.right, str);
  }
};
