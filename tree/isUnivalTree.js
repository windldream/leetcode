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
var isUnivalTree = function(root) {
  let pre = null;
  return dfs(root);

  function dfs(root) {
    if (root === null) {
      return true;
    }
    if (pre) {
      if (pre.val !== root.val) {
        return false;
      }
    }
    pre = root;
    return dfs(root.left) && dfs(root.right);
  }
};
