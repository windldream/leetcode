/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const res = [];
  helper(root);
  return res[k - 1];

  function helper(root) {
    if (root === null) {
      return;
    }
    helper(root.left);
    res.push(root.val);
    helper(root.right);
  }
};
