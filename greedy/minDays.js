/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const islands = []
  const seen = new Set()
  const firsts = []
  const seconds = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (firsts.length === 0) {
          firsts.push(i, j)
        } else if (seconds.length === 0) {
          seconds.push(i, j)
        }
        islands.push([i, j])
      }
    }
  }

  search(firsts[0], firsts[1], seen)
  if (seen.size < islands.length) return 0
  if (seconds.length === 0) return 1
  seen.clear()
  for (let i = 0; i < islands.length; i++) {
    const row = islands[i][0]
    const col = islands[i][1]
    grid[row][col] = 0
    if (i === 0) {
      search(seconds[0], seconds[1], seen)
    } else {
      search(firsts[0], firsts[1], seen)
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
