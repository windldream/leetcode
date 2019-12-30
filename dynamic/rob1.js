/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;

  if (len === 0) {
    return 0;
  }

  if (len < 3) {
    return Math.max.apply(null, nums);
  }

  return Math.max(robHelper(nums.slice(0, nums.length - 1)), robHelper(nums.slice(1)))

  function robHelper(nums) {
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
  }
};

console.log(rob([1, 2, 1, 1]))