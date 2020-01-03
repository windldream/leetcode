/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  let len = nums.length, dp = [], sum = 0;

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      let newNums = nums.slice(i + 1);
      sum = Math.max(nums[i] * getBoundaryVal(nums[i + 1]) + maxCoins(newNums), sum);
    } else {
      let newNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
      let newSum = getBoundaryVal(nums[i - 1]) * nums[i] * getBoundaryVal(nums[i + 1]) + maxCoins(newNums);
      sum = Math.max(sum, newSum);
    }
  }
  return sum;

  function getBoundaryVal(val) {
    if (val === undefined) {
      return 1;
    }
    return val;
  }
};

console.log(maxCoins([3, 1, 5, 8]));