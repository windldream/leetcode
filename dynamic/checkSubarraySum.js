/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const len = nums.length;

  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = nums[i];
    for (let j = i + 1; j < len; j++) {
      sum += nums[j];
      if (sum === 0 && k === 0) {
        return true;
      }
      if (sum % k === 0) {
        return true;
      }
    }
  }

  return false;
};

console.log(checkSubarraySum([0, 1, 0], 0));
