/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const len = nums.length
  let l = 0
  let r = 0
  let countZero = 0
  let countOne = 0
  let ans = 0
  while (r < len) {
    if (nums[r] === 0) {
      countZero++
    } else {
      countOne++
    }
    if (countZero < 2) {
      ans = Math.max(countOne, ans)
    } else {
      while (countZero > 1) {
        if (nums[l] === 0) {
          countZero--
        } else {
          countOne--
        }
        l++
      }
    }
    r++
  }
  return ans === len ? ans - 1 : ans
}
