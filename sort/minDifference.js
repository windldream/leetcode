/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  const len = nums.length
  if (len < 5) return 0
  nums.sort((a, b) => a - b)
  let min = Infinity
  for (let i = 0; i <= 3; i++) {
    min = Math.min(nums[len + i - 4] - nums[i], min)
  }
  return min
}

minDifference([82, 81, 95, 75, 20])
