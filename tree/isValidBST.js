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
  return helper(root, null, null);

  function helper(node, lower, upper) {
    if (node === null) {
      return true;
    }

    const val = node.val;
    if (lower !== null && val <= lower) {
      return false;
    }
    if (upper !== null && val >= upper) {
      return false;
    }

    if (!helper(node.right, val, upper)) {
      return false;
    }
    if (!helper(node.left, lower, val)) {
      return false;
    }

    return true;
  }
};
