/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const len = nums.length,
    map = new Map();

  let sum = 0;
  map.set(0, -1);
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum = sum % k;
    }
    if (map.has(sum)) {
      if (i - map.get(sum) > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};

console.log(checkSubarraySum([0, 1, 0], 0));
