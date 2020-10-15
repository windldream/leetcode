/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n) {
  let ans = 0
  while (n) {
    ans ^= n
    n = n >> 1
  }
  return ans
}
