/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let res = 0;
  dfs(root);
  return res;

  function dfs(root) {
    if (root === null) {
      return 0;
    }
    helper(root, sum);
    dfs(root.left, sum);
    dfs(root.right, sum);
  }

  function helper(root, sum) {
    if (root === null) {
      return;
    }
    sum -= root.val;
    if (sum === 0) {
      res++;
    }
    helper(root.left, sum);
    helper(root.right, sum);
  }
};
