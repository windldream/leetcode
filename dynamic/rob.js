/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;

  if (len === 0) {
    return 0;
  }

  let prevMax = 0,
    currMax = 0;
  for (let i = 0; i < len; i++) {
    let temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }

  return currMax;
};

console.log(rob([1, 2, 3, 1]))