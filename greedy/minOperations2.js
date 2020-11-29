/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const len = nums.length
  const sum = nums.reduce((prev, cur) => prev + cur, 0)
  if (sum === x) return len

  let curSum = 0
  let l = 0
  let r = 0
  let ans = -1
  while (r < len) {
    curSum += nums[r]
    while (curSum > sum - x && l <= r) {
      curSum -= nums[l++]
    }
    if (curSum === sum - x) {
      ans = Math.max(ans, r - l + 1)
    }
    r++
  }
  return ans === -1 ? -1 : len - ans
}

minOperations([1, 1], 3)
