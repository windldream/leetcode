/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let len = nums.length,
    max = 1,
    resetMax = 1;

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      resetMax++;
    } else {
      resetMax = 1;
    }
    max = Math.max(max, resetMax);
  }

  return max;
};

console.log(findLengthOfLCIS([2, 2, 2]))