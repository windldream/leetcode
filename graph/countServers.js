/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const rowSet = new Set()
  const colSet = new Set()
  for (let i = 0; i < m; i++) {
    if (grid[i].reduce((prev, cur) => prev + cur) > 1) {
      rowSet.add(i)
    }
  }

  for (let j = 0; j < n; j++) {
    let count = 0
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 1) {
        count++
        if (count > 1) break
      }
    }
    if (count > 1) {
      colSet.add(j)
    }
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && (rowSet.has(i) || colSet.has(j))) ans++
    }
  }
  return ans
}
