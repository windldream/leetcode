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
var inorderTraversal = function(root) {
  const res = [];
  if (root !== null) {
    inOrder(root, res);
  }
  return res;

  function inOrder(root, res) {
    if (root.left !== null) {
      inOrder(root.left, res);
    }

    res.push(root.val);

    if (root.right !== null) {
      inOrder(root.right, res);
    }
  }
};
