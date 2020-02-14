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
var isSymmetric = function(root) {
  return helper(root, root);

  function helper(l, r) {
    if (root === null) {
      return true;
    }
    if (l === null && r === null) {
      return true;
    } else if (l === null || r === null) {
      return false;
    } else {
      if (l.val === r.val) {
        return helper(l.left, r.right) && helper(l.right, r.left);
      }
    }

    return false;
  }
};
