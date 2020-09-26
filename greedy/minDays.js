/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const islands = []
  const seen = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        islands.push([i, j])
      }
    }
  }

  if (islands.length === 0) return 0
  search(islands[0][0], islands[0][1], seen)
  if (seen.size < islands.length) return 0
  if (islands.length === 1) return 1
  seen.clear()
  for (let i = 0; i < islands.length; i++) {
    const row = islands[i][0]
    const col = islands[i][1]
    grid[row][col] = 0
    if (i === 0) {
      search(islands[1][0], islands[1][1], seen)
    } else {
      search(islands[0][0], islands[0][1], seen)
    }
    if (seen.size < islands.length - 1) {
      return 1
    }
    seen.clear()
    grid[row][col] = 1
  }

  return 2

  function search(i, j, seen) {
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    if (i >= 0 && i < m && j >= 0 && j < n && !seen.has(i + '&' + j) && grid[i][j] === 1) {
      seen.add(i + '&' + j)
      for (const [x, y] of dirs) {
        const dx = i + x
        const dy = j + y
        search(dx, dy, seen)
      }
    }
  }
}

minDays([
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1]
])
