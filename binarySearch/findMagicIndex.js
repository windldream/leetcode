/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (i === nums[i]) {
      return i
    }
    i = Math.max(nums[i], i + 1)
  }
  return -1
}
