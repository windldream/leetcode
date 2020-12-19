/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestDistance = function(grid) {
  const n = grid.length
  const m = grid[0].length
  let buildings = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        buildings++
      }
    }
  }

  let ans = Infinity
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        const visited = Array(n).fill(0).map(() => Array(m).fill(false))
        const dis = bfs(grid, i, j, buildings, visited)
        if (dis === -1) continue
        ans = Math.min(ans, dis)
      }
    }
  }
  return ans === Infinity ? -1 : ans

  function bfs(grid, i, j, buildings, visited) {
    const dirs = [[1, 0], [0, 1], [0, -1], [-1, 0]]
    const queue = []
    queue.push([i, j])
    visited[i][j] = true
    let dis = 0
    let sum = 0
    let count = 0
    while (queue.length) {
      const len = queue.length
      for (let k = 0; k < len; k++) {
        const [x, y] = queue.shift()
        if (grid[x][y] === 1) {
          count++
          sum += dis
          if (count === buildings) return sum
          continue
        }
        for (const [dx, dy] of dirs) {
          const r = x + dx
          const c = y + dy
          if (r >= 0 && r < n && c >= 0 && c < m && !visited[r][c] && grid[r][c] !== 2) {
            queue.push([r, c])
            visited[r][c] = true
          }
        }
      }
      dis++
    }
    return count === buildings ? sum : -1
  }
};