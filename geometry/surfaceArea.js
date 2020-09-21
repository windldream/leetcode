/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let area = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const count = grid[i][j]
      if (count > 0) {
        area += count * 4 + 2
        if (i > 0) {
          area -= Math.min(count, grid[i - 1][j]) * 2
        }
        if (j > 0) {
          area -= Math.min(count, grid[i][j - 1]) * 2
        }
      }
    }
  }
  return area
}
