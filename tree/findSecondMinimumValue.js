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
var findSecondMinimumValue = function(root) {
  const res = [];
  preorder(root);
  res.sort((a, b) => a - b);
  return res.length > 1 ? res[1] : -1;

  function preorder(root) {
    if (root === null) {
      return;
    }
    preorder(root.left);
    if (!res.includes(root.val)) {
      res.push(root.val);
    }
    preorder(root.right);
  }
};
