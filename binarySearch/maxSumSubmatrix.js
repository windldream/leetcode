/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const m = matrix.length
  const n = matrix[0].length
  let max = -Infinity

  for (let l = 0; l < n; l++) {
    const rowSum = Array(m).fill(0)

    for (let r = l; r < n; r++) {
      for (let i = 0; i < m; i++) {
        rowSum[i] += matrix[i][r]
      }

      max = Math.max(max, dpmax(rowSum, k))
    }
  }

  return max

  function dpmax(arr, k) {
    let max = -Infinity
    const len = arr.length

    for (let l = 0; l < len; l++) {
      let sum = 0

      for (let r = l; r < len; r++) {
        sum += arr[r]

        if (sum > max && sum <= k) max = sum
      }
    }

    return max
  }
}
