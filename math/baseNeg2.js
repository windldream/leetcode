/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function (N) {
  let ans = ''
  while (N !== 0) {
    const mod = Math.abs(N) % 2
    N = -(N >> 1)
    ans = mod + ans
  }
  return ans ? ans : '0'
}

baseNeg2(4)
