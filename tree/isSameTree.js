/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return helper(p, q);

  function helper(p, q) {
    if (p === null && q === null) {
      return true;
    }
    if (p !== null && q !== null) {
      if (p.val !== q.val) {
        return false;
      }
      if (!helper(p.left, q.left)) {
        return false;
      }
      if (!helper(p.right, q.right)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
};
