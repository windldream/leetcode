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
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  return helper(nums, 0, nums.length - 1);

  function helper(nums, l, r) {
    if (l > r) {
      return null;
    }

    const m = l + Math.floor((r - l) / 2);
    const root = new TreeNode(nums[m]);
    root.left = helper(nums, l, m - 1);
    root.right = helper(nums, m + 1, r);
    return root;
  }
};
//    0
// -10 5
//   -3
