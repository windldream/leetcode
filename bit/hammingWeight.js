/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let ans = 0
  while (n !== 0) {
    if (n & 1) ans++
    n = n >>> 1
  }
  return ans
}
