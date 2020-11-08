/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  const arr = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0))
  for (const [r, c] of indices) {
    for (let i = 0; i < m; i++) {
      arr[r][i] += 1
    }
    for (let i = 0; i < n; i++) {
      arr[i][c] += 1
    }
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] & 1) {
        ans++
      }
    }
  }
  return ans
}
