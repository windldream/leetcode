/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  if (nums.length === 0) {
    return false;
  }

  if (k === 1) {
    return true;
  }

  const len = nums.length,
    sum = nums.reduce((prev, curr) => prev + curr, 0),
    aver = sum / k;
  if (sum % k !== 0) {
    return false;
  }
  if (nums.some(num => num > aver)) {
    return false;
  }

  const arr = Array(k).fill(aver);
  nums.sort((a, b) => a - b);

  return helper(nums, len - 1, arr, k);

  function helper(nums, curr, arr, k) {
    if (curr < 0) {
      return true;
    }
    for (let i = 0; i < k; i++) {
      if (nums[curr] === arr[i] || arr[i] - nums[curr] >= nums[0]) {
        arr[i] = arr[i] - nums[curr];
        if (helper(nums, curr - 1, arr, k)) {
          return true;
        }
        arr[i] = arr[i] + nums[curr];
      }
    }
    return false;
  }
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
