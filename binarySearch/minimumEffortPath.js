/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const row = heights.length
  const col = heights[0].length
  const f = Array(row)
    .fill(0)
    .map(() => Array(col).fill(Infinity))
  const queue = [[0, 0]]
  f[0][0] = 0

  while (queue.length) {
    const [r, c] = queue.shift()

    for (const [dr, dc] of dirs) {
      const x = dr + r
      const y = dc + c

      if (x >= 0 && x < row && y >= 0 && y < col) {
        // 路径最大值
        const val = Math.max(f[r][c], Math.abs(heights[x][y] - heights[r][c]))

        if (val >= f[x][y]) continue

        f[x][y] = val
        queue.push([x, y])
      }
    }
  }

  return f[row - 1][col - 1]
}
