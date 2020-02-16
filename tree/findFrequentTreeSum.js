/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const map = {};
  dfs(root);
  let maxSumCount = -Infinity;
  for (let key in map) {
    maxSumCount = Math.max(maxSumCount, map[key]);
  }
  const res = [];
  for (let key in map) {
    if (map[key] === maxSumCount) {
      res.push(+key);
    }
  }
  return res;

  function dfs(root) {
    if (root === null) {
      return;
    }
    let sum;
    sum = helper(root);
    map[sum] = (map[sum] || 0) + 1;
    dfs(root.left);
    dfs(root.right);

    function helper(root, sum) {
      if (root === null) {
        return 0;
      }
      sum = root.val;
      if (root.left === null && root.right === null) {
        return sum;
      }
      return sum + helper(root.left) + helper(root.right);
    }
  }
};
