/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  const M = 10 ** 9 + 7;
  let res = 0;
  dfs(root, '');
  return res;

  function dfs(root, str) {
    if (root === null) {
      return;
    }
    str += root.val;
    if (root.left === null && root.right === null) {
      const num = parseInt(str, 2);
      res = (res + num) % M;
      return;
    }
    dfs(root.left, str);
    dfs(root.right, str);
  }
};
