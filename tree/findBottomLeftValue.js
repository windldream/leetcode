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
var findBottomLeftValue = function(root) {
  const res = [];
  helper(root, 0);
  return res[res.length - 1][0];

  function helper(root, level) {
    if (root === null) {
      return;
    }
    if (res.length === level) {
      res.push([]);
    }
    res[level].push(root.val);
    helper(root.left, level + 1);
    helper(root.right, level + 1);
  }
};
