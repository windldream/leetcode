/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  const rows = heights.length
  const cols = heights[0].length
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const values = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(Infinity))
  values[0][0] = 0
  const queue = [[0, 0]]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift()
      for (const [dx, dy] of dirs) {
        const x = dx + row
        const y = dy + col
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
          const val = Math.max(Math.abs(heights[x][y] - heights[row][col]), values[row][col])
          if (val >= values[x][y]) continue
          values[x][y] = val
          queue.push([x, y])
        }
      }
    }
  }
  return values[rows - 1][cols - 1]
}

minimumEffortPath([
  [8, 3, 2, 5, 2, 10, 7, 1, 8, 9],
  [1, 4, 9, 1, 10, 2, 4, 10, 3, 5],
  [4, 10, 10, 3, 6, 1, 3, 9, 8, 8],
  [4, 4, 6, 10, 10, 10, 2, 10, 8, 8],
  [9, 10, 2, 4, 1, 2, 2, 6, 5, 7],
  [2, 9, 2, 6, 1, 4, 7, 6, 10, 9],
  [8, 8, 2, 10, 8, 2, 3, 9, 5, 3],
  [2, 10, 9, 3, 5, 1, 7, 4, 5, 6],
  [2, 3, 9, 2, 5, 10, 2, 7, 1, 8],
  [9, 10, 4, 10, 7, 4, 9, 3, 1, 6]
])
