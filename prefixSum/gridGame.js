/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const n = grid[0].length
  const sum = Array(2)
    .fill(0)
    .map(() => Array(n + 1).fill(0))

  for (let i = 0; i < n; i++) {
    sum[0][i + 1] = sum[0][i] + grid[0][i]
    sum[1][i + 1] = sum[1][i] + grid[1][i]
  }

  let ans = Infinity

  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, Math.max(sum[0][n] - sum[0][i + 1], sum[1][i]))
  }

  return ans
}

// var gridGame = function (grid) {
//   let l = 0
//   let r = grid[0].length - 1
//   let suml = 0
//   let sumr = 0

//   while (l < r) {
//     if (suml + grid[1][l] < sumr + grid[0][r]) {
//       suml += grid[1][l]
//       l++
//     } else {
//       sumr += grid[0][r]
//       r--
//     }
//   }

//   return Math.max(suml, sumr)
// }
