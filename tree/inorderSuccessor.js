/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  if (root === null) {
    return null;
  }
  let node = null;
  inOrder(root);
  return node;

  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    if (root.val === p.val) {
      node = root.left || root.right;
      return;
    }
    inOrder(root.right);
  }
};
