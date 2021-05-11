/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
  const ans = []
  const n = land.length
  const m = land[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1]
  ]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 0) {
        const queue = [[i, j]]
        land[i][j] = 1
        let area = 0
        while (queue.length) {
          const [x, y] = queue.shift()
          area += 1
          for (const [dx, dy] of dirs) {
            const r = dx + x
            const c = dy + y
            if (r >= 0 && r < n && c >= 0 && c < m && land[r][c] === 0) {
              queue.push([r, c])
              land[r][c] = 1
            }
          }
        }
        ans.push(area)
      }
    }
  }
  return ans.sort((a, b) => a - b)
}
