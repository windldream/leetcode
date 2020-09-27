/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function (targetGrid) {
  const m = targetGrid.length
  const n = targetGrid[0].length
  const top = Array(61).fill(60)
  const bottom = Array(61).fill(0)
  const left = Array(61).fill(60)
  const right = Array(61).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const k = targetGrid[i][j]
      // 每种颜色的矩阵范围
      top[k] = Math.min(top[k], i)
      bottom[k] = Math.max(bottom[k], i)
      left[k] = Math.min(left[k], j)
      right[k] = Math.max(right[k], j)
    }
  }

  const haveEdge = Array(61)
    .fill(0)
    .map(() => Array(61).fill(0))
  const edgeFrom = Array(61)
    .fill(0)
    .map(() => [])
  const rudu = Array(61).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const k = targetGrid[i][j]
      for (let color = 1; color <= 60; color++) {
        if (top[color] <= i && i <= bottom[color] && left[color] <= j && j <= right[color]) {
          if (color != k && !haveEdge[color][k]) {
            edgeFrom[color].push(k)
            rudu[k] += 1
            haveEdge[color][k] = 1
          }
        }
      }
    }
  }

  const visited = []
  while (true) {
    let i = 1
    for (; i <= 60; i++) {
      if (rudu[i] === 0) {
        visited.push(i)
        rudu[i] = -1
        for (const a of edgeFrom[i]) {
          rudu[a] -= 1
        }
        break
      }
    }
    if (i === 61) break
  }
  return visited.length === 60
}

isPrintable([
  [1, 2, 1],
  [2, 1, 2],
  [1, 2, 1]
])
