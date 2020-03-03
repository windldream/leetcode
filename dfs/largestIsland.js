/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  if (grid.length === 0) {
    return 0;
  }

  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  const seen = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let temp = grid[i][j];
      let getArea = {
        area: 0
      };
      if (grid[i][j] === 0) {
        const visited = {};
        grid[i][j] = 1;
        dfs(grid, i, j, getArea, visited);
      } else {
        grid[i][j] = 1;
        dfs(grid, i, j, getArea, seen);
      }
      max = Math.max(max, getArea.area);
      grid[i][j] = temp;
    }
  }
  return max;

  function dfs(grid, i, j, getArea, visited) {
    const key = i + '$' + j;
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      visited[key] ||
      grid[i][j] === 0
    ) {
      return;
    }
    visited[key] = 1;
    getArea.area += 1;
    dfs(grid, i - 1, j, getArea, visited);
    dfs(grid, i + 1, j, getArea, visited);
    dfs(grid, i, j - 1, getArea, visited);
    dfs(grid, i, j + 1, getArea, visited);
  }
};
