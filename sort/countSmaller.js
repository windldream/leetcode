/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const len = nums.length;
  const res = Array(len).fill(0);
  let root = null;
  // 逆序构建二叉树可以在插入节点的时候计算右侧小于当前元素的个数
  for (let i = len - 1; i >= 0; i--) {
    root = insertNode(root, nums[i], res, i);
  }
  return res;
  
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    this.count = 0;
  }

  function insertNode(root, val, res, index) {
    if (root === null) {
      root = new TreeNode(val);
    } else if (val <= root.val) {
      root.count += 1;
      root.left = insertNode(root.left, val, res, index);
    } else if (val > root.val) {
      res[index] += root.count + 1;
      root.right = insertNode(root.right, val, res, index);
    }
    return root;
  }
};
