/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  const temp = nums.slice();
  let l = Math.ceil(len / 2);
  for (let i = 0; i < len; i += 2) {
    nums[i] = temp[--l];
  }
  let r = len - 1;
  for (let i = 1; i < len; i += 2) {
    nums[i] = temp[r--];
  }
  console.log(nums)
};

wiggleSort([4,5,5,6])

