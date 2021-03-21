/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0
  while (n !== 0) {
    n = n & (n - 1)
    ans += 1
  }
  return ans
}
