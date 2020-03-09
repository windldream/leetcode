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
  helper(root);
  return res;

  function helper(root) {
    if (root === null) {
      return;
    }
    dfs(root, sum);
    helper(root.left, sum);
    helper(root.right, sum);
  }

  function dfs(root, sum) {
    if (root === null) {
      return;
    }
    sum -= root.val;
    if (sum === 0) {
      res += 1;
    }
    dfs(root.left, sum);
    dfs(root.right, sum);
  }
};
