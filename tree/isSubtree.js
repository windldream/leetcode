/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  return dfs(s, t);

  function dfs(s, t) {
    if (s === null) {
      return false;
    }
    if (isIdentical(s, t)) {
      return true;
    }

    if (s.left && dfs(s.left, t)) {
      return true;
    }

    if (s.right && dfs(s.right, t)) {
      return true;
    }

    return false;
  }

  function isIdentical(p, q) {
    if (p === null && q === null) {
      return true;
    } else if (p !== null && q !== null) {
      return (
        p.val === q.val &&
        isIdentical(p.left, q.left) &&
        isIdentical(p.right, q.right)
      );
    }
    return false;
  }
};
