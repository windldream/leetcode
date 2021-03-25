/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y
  let ans = 0
  while (n) {
    n = n & (n - 1)
    ans += 1
  }
  return ans
}
