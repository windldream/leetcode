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
  if (root === null) {
    return 0;
  }
  return (
    countPathSumWithNode(root, sum) +
    pathSum(root.left, sum) +
    pathSum(root.right, sum)
  );

  function countPathSumWithNode(root, sum) {
    if (root === null) {
      return 0;
    }
    let totalPath = 0;
    sum -= root.val;
    if (sum === 0) {
      totalPath += 1;
    }
    totalPath +=
      countPathSumWithNode(root.left, sum) +
      countPathSumWithNode(root.right, sum);
    return totalPath;
  }
};
