/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let ans = 0
  while (n >= 5) {
    n = Math.trunc(n / 5)
    ans += n
  }
  return ans
}
