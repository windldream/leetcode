/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = 2 ** 31 - 1
  let min = -(2 ** 31)
  let nums = []
  let isPositive = true
  if (x < 0) {
    x = -x
    isPositive = false
  }
  while (x) {
    nums.push(x % 10)
    x = ~~(x / 10)
  }

  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i] * 10 ** (nums.length - i - 1)
  }

  if (!isPositive) ans = -ans
  if (ans > max || ans < min) return 0
  return ans
}
