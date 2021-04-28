/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  while (m > 0 && n > 0) {
    A[m + n - 1] = A[m - 1] > B[n - 1] ? A[--m] : B[--n]
  }

  while (n > 0) {
    A[n - 1] = B[n - 1]
    n--
  }
}
