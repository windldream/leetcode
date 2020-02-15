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
  const res = [];
  helper(root, []);

  return res.map(val => +val.join('')).reduce((prev, cur) => prev + cur, 0);

  function helper(root, path) {
    if (root === null) {
      return 0;
    }
    path.push(root.val);
    if (root.left === null && root.right === null) {
      res.push(path);
    }
    helper(root.left, path.slice());
    helper(root.right, path.slice());
  }
};
