/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let ans = 0
  const min = Math.min(...nums)
  for (const num of nums) {
    ans += num - min
  }
  return ans
}
