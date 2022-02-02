/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const n = nums.length
  const ans = Array(2 * n).fill(0)

  for (let i = 0; i < n; i++) {
    ans[i] = ans[i + n] = nums[i]
  }

  return ans
}
