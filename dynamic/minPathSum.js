/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    path = [];

  for (let i = 0; i < m; i++) {
    path[i] = [];
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        path[i][j] = grid[i][j];
      } else if (i === 0) {
        path[i][j] = grid[i][j] + path[i][j - 1];
      } else if (j === 0) {
        path[i][j] = grid[i][j] + path[i - 1][j];
      } else {
        const a = grid[i][j] + path[i - 1][j];
        const b = grid[i][j] + path[i][j - 1];
        path[i][j] = a < b ? a : b;
      }
    }
  }

  return path[m - 1][n - 1];
}

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]))