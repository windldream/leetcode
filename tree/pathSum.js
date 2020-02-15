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
  helper(root, [], sum);
  return res;

  function helper(root, path, sum) {
    if (root === null) {
      return 0;
    }

    path.push(root.val);
    const s = path.reduce((prev, cur) => prev + cur);
    if (s === sum && root.left === null && root.right === null) {
      return res.push(path);
    }
    helper(root.left, path.slice(), sum);
    helper(root.right, path.slice(), sum);
  }
};
