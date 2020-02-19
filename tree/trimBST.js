/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  return inorder(root);

  function inorder(root) {
    if (root === null) {
      return root;
    }
    if (root.val < L) {
      return inorder(root.right, L, R);
    }
    if (root.val > R) {
      return inorder(root.left, L, R);
    }
    root.left = inorder(root.left, L, R);
    root.right = inorder(root.right, L, R);
    return root;
  }
};
