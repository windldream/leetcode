/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  const len = nums.length
  let ans = -1
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let sum = nums[i] + nums[j]
      if (sum < k && ans < sum) {
        ans = Math.max(ans, sum)
      }
    }
  }
  return ans
}
