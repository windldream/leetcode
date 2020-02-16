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
var findMode = function(root) {
  const map = {};
  helper(root);
  let maxCount = -Infinity;
  for (let key in map) {
    maxCount = Math.max(map[key], maxCount);
  }
  const res = [];
  for (let key in map) {
    if (map[key] === maxCount) {
      res.push(+key);
    }
  }
  return res;

  function helper(root) {
    if (root === null) {
      return;
    }
    helper(root.left);
    map[root.val] = (map[root.val] || 0) + 1;
    helper(root.right);
  }
};
