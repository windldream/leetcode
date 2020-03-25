/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  const len = nums.length;
  let res = 0;
  let sums = [];
  for (let i = 0; i < len; i++) {
    sums[i] = (sums[i - 1] || 0) + nums[i];
  }
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let sum;
      if (i === j) {
        sum = nums[i];
      } else {
        sum = sums[j] - sums[i] + nums[i]
      }
      if (lower <= sum && sum <= upper) {
        res++;
      }
    }
  }
  return res;
};