/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const res = Array(n)
    .fill(0)
    .map((val, index) => index + 1)
  if (k === 1) return res

  for (let i = 1; i < k; i++) {
    reverse(res, i, n - 1)
  }
  return res

  function reverse(arr, i, j) {
    while (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
}
