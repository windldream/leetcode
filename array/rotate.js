/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length < 2) {
    return nums;
  }
  let n = nums.length,
    new_head, new_tail, new_arr;

  new_head = nums.slice(n - k % n);
  new_tail = nums.slice(0, n - k % n);
  new_arr = [...new_head, ...new_tail];

  new_arr.forEach((item, index) => {
    nums[index] = item;
  });
};
nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log(nums)