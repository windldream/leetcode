/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const len = nums.length
  if (len === 0) return 0
  let ans = 0
  let cur = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur++
    } else {
      ans = Math.max(ans, cur)
      cur = 0
    }
  }
  return Math.max(ans, cur)
}

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
