/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  return buildTree(nums);

  function buildTree(nums) {
    if (nums.length === 0) {
      return null;
    }
    const max = Math.max.apply(null, nums);
    const index = nums.indexOf(max);
    const root = new TreeNode(max);
    root.left = buildTree(nums.slice(0, index));
    root.right = buildTree(nums.slice(index + 1));
    return root;
  }
};
