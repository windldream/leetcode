/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function (grid) {
  const m = grid.length
  if (m === 0) return 0
  const n = grid[0].length
  const home = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        home.push([i, j])
      }
    }
  }

  let ans = Infinity
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let dis = 0
      for (const [x, y] of home) {
        dis += Math.abs(i - x) + Math.abs(j - y)
      }
      ans = Math.min(ans, dis)
    }
  }
  return ans
}

minTotalDistance([
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
])
