/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length
  const n = mat[0].length
  const queue = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) queue.push([i, j])
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const ans = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  let step = 0

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const [r, c] = queue.shift()
      if (ans[r][c]) continue
      ans[r][c] = step

      for (const [dr, dc] of dirs) {
        const [x, y] = [r + dr, c + dc]

        if (x >= 0 && x < m && y >= 0 && y < n && mat[x][y] === 1) {
          mat[x][y] = 0
          queue.push([x, y])
        }
      }
    }

    step++
  }

  return ans
}
