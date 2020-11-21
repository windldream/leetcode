/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let ans = 0
  for (let i = 1; i <= n; i += 2) {
    ans += n - i
  }
  return ans
}
