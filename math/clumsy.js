/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  if (N <= 4) return [1, 2, 6, 7][N - 1]
  return N + [1, 2, 2, -1][N % 4]
}
