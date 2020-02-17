/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let num = 0;
  inorder(root);
  return root;

  function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.right);
    root.val = root.val + num;
    num = root.val;
    inorder(root.left);
    return;
  }
};
