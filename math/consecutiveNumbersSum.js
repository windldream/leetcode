/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
  let i = 1
  let ans = 0
  while (N > 0) {
    ans += N % i === 0
    N -= i
    i += 1
  }
  return ans
}
