/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  for (let k = i; k <= j; k++) {
    if (N & (1 << k)) {
      N -= 1 << k
    }
  }
  return N + (M << i)
}
