/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let ans = 0
  while (n > 1) {
    if (n & 1) {
      n = (n >> 1) + 1
      ans += n - 1
    } else {
      n = n >> 1
      ans += n
    }
  }
  return ans
}
