/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let sum = 0;
  let startR;
  let startC;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        sum += 1;
      } else if (grid[i][j] === 1) {
        sum += 1;
        startR = i;
        startC = j;
      }
    }
  }
  return dfs(grid, startR, startC, sum);

  function dfs(grid, i, j, sum) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === -1
    )
      return 0;
    if (grid[i][j] === 2) {
      return sum === 0 ? 1 : 0;
    }
    grid[i][j] = -1;
    const res =
      dfs(grid, i - 1, j, sum - 1) +
      dfs(grid, i + 1, j, sum - 1) +
      dfs(grid, i, j - 1, sum - 1) +
      dfs(grid, i, j + 1, sum - 1);
    grid[i][j] = 0;
    return res;
  }
};
