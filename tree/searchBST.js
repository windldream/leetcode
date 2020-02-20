/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let node = null;
  inorder(root, val);
  return node;
  function inorder(root, val) {
    if (root === null) {
      return;
    }
    if (root.val === val) {
      node = root;
      return;
    } else if (root.val > val) {
      inorder(root.left, val);
    } else {
      inorder(root.right, val);
    }
  }
};
