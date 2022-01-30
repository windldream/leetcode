/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const n = nums.length
  let ans = 0
  let pre = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] > pre) {
      ans += nums[i] - pre
      pre = nums[i]
    } else {
      pre = nums[i]
    }
  }
  return ans
}

maxAlternatingSum([4, 2, 5, 3])
