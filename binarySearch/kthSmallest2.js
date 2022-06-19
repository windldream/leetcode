/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length
  let l = matrix[0][0]
  let r = matrix[n - 1][n - 1]

  while (l < r) {
    const mid = (l + r) >> 1
    const num = count(matrix, mid, n)

    if (num >= k) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return l

  function count(matrix, mid, n) {
    let i = n - 1
    let j = 0
    let num = 0

    while (i >= 0 && j < n) {
      if (matrix[i][j] <= mid) {
        num += i + 1
        j++
      } else {
        i--
      }
    }

    return num
  }
}
