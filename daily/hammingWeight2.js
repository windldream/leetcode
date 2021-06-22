/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let cnt = 0
  while (n) {
    n = n & (n - 1)
    cnt += 1
  }
  return cnt
}
