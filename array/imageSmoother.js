/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  const m = M.length
  const n = M[0].length
  const ans = Array(m)
    .fill(0)
    .map(() => [])

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = getAver(M, i, j)
    }
  }
  return ans

  function getAver(arr, i, j) {
    const dirs = [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0]
    ]

    let sum = arr[i][j]
    let count = 1
    for (const [dx, dy] of dirs) {
      const x = dx + i
      const y = dy + j
      if (x >= 0 && x < m && y >= 0 && y < n) {
        count++
        sum += arr[x][y]
      }
    }
    return Math.trunc(sum / count)
  }
}
