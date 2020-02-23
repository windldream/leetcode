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
  return build(nums);

  function build(nums) {
    if (nums.length === 0) {
      return null;
    }
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    if (nums.length === 0) {
      return root;
    }
    root.left = build(nums.slice(0, mid));
    root.right = build(nums.slice(mid + 1));
    return root;
  }
};
