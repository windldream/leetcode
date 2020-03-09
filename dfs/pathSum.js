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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const res = [];
  dfs(root, [], sum);
  return res;

  function dfs(root, path, sum) {
    if (root === null) {
      return;
    }
    path.push(root.val);
    if (root.left === null && root.right === null) {
      if (root.val === sum) {
        res.push(path);
      }
    }
    dfs(root.left, path.slice(), sum - root.val);
    dfs(root.right, path.slice(), sum - root.val);
  }
};
