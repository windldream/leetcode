/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const queue = []

  first: for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j)
        break first
      }
    }
  }

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  let step = 0

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const [r, c] = queue.shift()

      for (const [dr, dc] of dirs) {
        const [x, y] = [r + dr, c + dc]

        if (x >= 0 && x < m && y >= 0 && y < n) {
          if (grid[x][y] === 1) return step
          if (grid[x][y] === 0) {
            queue.push([x, y])
            grid[x][y] = 2
          }
        }
      }
    }

    step++
  }

  return -1

  function dfs(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== 1) return

    grid[x][y] = 2
    queue.push([x, y])
    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)
  }
}
