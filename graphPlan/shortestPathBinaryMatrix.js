/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1]
  ]
  const n = grid.length
  const queue = [[0, 0]]
  let step = 0

  while (queue.length) {
    step++

    for (let i = 0, len = queue.length; i < len; i++) {
      const [r, c] = queue.shift()

      if (r === n - 1 && c === n - 1) return step

      for (const [dr, dc] of dirs) {
        const [x, y] = [dr + r, dc + c]

        if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0) {
          grid[x][y] = 1
          queue.push([x, y])
        }
      }
    }
  }

  return -1
}
