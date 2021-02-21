/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const m = isWater.length
  const n = isWater[0].length
  const ans = Array(m)
    .fill(0)
    .map(() => Array(n).fill(Infinity))
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const queue = []
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        queue.push([i, j])
        visited[i][j] = true
      }
    }
  }

  let num = 0
  while (queue.length) {
    const remove = queue.slice()
    queue.length = []
    for (let i = 0; i < remove.length; i++) {
      const [row, col] = remove[i]
      ans[row][col] = num
      for (const [dx, dy] of dirs) {
        const x = row + dx
        const y = col + dy
        if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
          queue.push([x, y])
          visited[x][y] = true
        }
      }
    }
    num++
  }
  return ans
}

highestPeak([
  [1, 0, 1, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
])
