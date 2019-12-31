/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let len = nums.length, currMax = 1, currMin = 1, max = -Infinity;

  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) {
      let temp = currMax;
      currMax = currMin;
      currMin = temp;
    }
    currMax = Math.max(currMax * nums[i], nums[i]);
    currMin = Math.min(currMin * nums[i], nums[i]);

    max = Math.max(currMax, max);
  }

  return max;
};

console.log(maxProduct([2, 3, -2, 4])) 