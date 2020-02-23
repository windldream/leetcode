/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {
    return 0;
  }

  const m = grid.length,
    n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        bfs(grid, i, j);
        res++;
      }
    }
  }
  return res;

  function bfs(grid, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i > grid.length - 1 ||
      j > grid[0].length - 1 ||
      grid[i][j] !== '1'
    ) {
      return;
    }
    grid[i][j] = '2';
    bfs(grid, i - 1, j);
    bfs(grid, i + 1, j);
    bfs(grid, i, j - 1);
    bfs(grid, i, j + 1);
  }
};
