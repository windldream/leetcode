/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const n = grid.length
  const queue = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) queue.push([i, j])
    }
  }

  if (queue.length === n * n) return -1

  let ans = -1

  while (queue.length) {
    for (let i = queue.length; i > 0; i--) {
      const [r, c] = queue.shift()

      for (const [dr, dc] of dirs) {
        const [x, y] = [r + dr, c + dc]

        if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0) {
          grid[x][y] = 1
          queue.push([x, y])
        }
      }
    }

    ans++
  }

  return ans
}
