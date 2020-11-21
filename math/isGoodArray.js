/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
  const len = nums.length
  let ans = nums[0]
  for (let i = 1; i < len; i++) {
    ans = gcd(ans, nums[i])
  }
  return ans === 1

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}
