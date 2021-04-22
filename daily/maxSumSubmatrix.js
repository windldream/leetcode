/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// var maxSumSubmatrix = function (matrix, k) {
//   const m = matrix.length
//   const n = matrix[0].length
//   const presum = Array(m + 1)
//     .fill(0)
//     .map(() => Array(n + 1).fill(0))
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       presum[i + 1][j + 1] = presum[i + 1][j] + presum[i][j + 1] - presum[i][j] + matrix[i][j]
//     }
//   }

//   let ans = -Infinity
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let i1 = i + 1; i1 <= m; i1++) {
//         for (let j1 = j + 1; j1 <= n; j1++) {
//           const sum = presum[i1][j1] + presum[i][j] - presum[i1][j] - presum[i][j1]
//           if (sum <= k) {
//             ans = Math.max(ans, sum)
//           }
//         }
//       }
//     }
//   }
//   return ans
// }

var maxSumSubmatrix = function (matrix, k) {
  const rows = matrix.length
  const cols = matrix[0].length
  let max = -Infinity
  for (let l = 0; l < cols; l++) {
    const rowSum = Array(rows).fill(0)
    for (let r = l; r < cols; r++) {
      for (let i = 0; i < rows; i++) {
        rowSum[i] += matrix[i][r]
      }
      max = Math.max(max, dpmax(rowSum, k))
      if (max === k) return k
    }
  }
  return max

  function dpmax(arr, k) {
    let rollSum = arr[0]
    let rollMax = rollSum
    for (let i = 1; i < arr.length; i++) {
      if (rollSum > 0) rollSum += arr[i]
      else rollSum = arr[i]
      if (rollSum > rollMax) rollMax = rollSum
    }

    if (rollMax <= k) return rollMax

    let max = -Infinity
    for (let l = 0; l < arr.length; l++) {
      let sum = 0
      for (let r = l; r < arr.length; r++) {
        sum += arr[r]
        if (sum > max && sum <= k) max = sum
        if (max === k) return k
      }
    }
    return max
  }
}

maxSumSubmatrix([[2, 2, -1]], 0)

// [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ]
