/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const sum1 = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  const sum2 = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 2).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      sum1[i][j] = sum1[i - 1][j - 1] + grid[i - 1][j - 1]
      sum2[i][j] = sum2[i - 1][j + 1] + grid[i - 1][j - 1]
    }
  }

  const set = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      set.add(grid[i][j])
      for (let k = i + 2; k < m; k += 2) {
        const ux = i
        const uy = j
        const dx = k
        const dy = j
        const lx = (i + k) >> 1
        const ly = j - ((k - i) >> 1)
        const rx = (i + k) >> 1
        const ry = j + ((k - i) >> 1)
        if (ly < 0 || ry >= n) break

        set.add(
          sum2[lx + 1][ly + 1] -
            sum2[ux][uy + 2] +
            sum1[rx + 1][ry + 1] -
            sum1[ux][uy] +
            sum1[dx + 1][dy + 1] -
            sum1[lx][ly] +
            sum2[dx + 1][dy + 1] -
            sum2[rx][ry + 2] -
            (grid[ux][uy] + grid[dx][dy] + grid[lx][ly] + grid[rx][ry])
        )
      }
    }
  }

  return [...set].sort((a, b) => b - a).slice(0, 3)
}
