/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let pre = null,
    flag = true;
  inOrder(root);
  return flag;

  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    if (pre) {
      if (root.val <= pre.val) {
        flag = false;
        return;
      }
    }
    pre = root;
    inOrder(root.right);
  }
};
