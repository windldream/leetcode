/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let l = -1
  let r = 0
  let ans = 0
  while (r < nums.length) {
    if (nums[r] === 0) {
      l = r
    }
    ans = Math.max(r - l, ans)
    r++
  }
  return ans
}

findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])
