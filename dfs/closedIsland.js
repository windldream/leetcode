/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let isClosed = true;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        dfs(grid, i, j);
        if (isClosed) {
          res++;
        }
        isClosed = true;
      }
    }
  }
  return res;

  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      isClosed = false;
      return;
    }
    if (grid[i][j] !== 0) {
      return;
    }
    grid[i][j] = 1;
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  }
};
