/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (grid.length === 0) {
    return 0;
  }

  let max = 0;
  const m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(dfs(i, j), max);
      }
    }
  }

  return max;

  function dfs(i, j) {
    let area = 0;
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] !== 1) {
      return 0;
    }
    grid[i][j] = 2;
    return (
      area + 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
    );
  }
};
