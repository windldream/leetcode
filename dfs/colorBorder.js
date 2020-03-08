/**
 * @param {number[][]} grid
 * @param {number} r0
 * @param {number} c0
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, r0, c0, color) {
  const visited = new Set();
  const dirR = [-1, 0, 1, 0];
  const dirC = [0, 1, 0, -1];
  dfs(grid, r0, c0, grid[r0][c0], color, visited);
  return grid;

  function dfs(grid, r, c, old, color, visited) {
    if (visited.has(r + '$' + c)) {
      return;
    }
    visited.add(r + '$' + c);
    for (let d = 0; d < 4; d++) {
      const i = r + dirR[d];
      const j = c + dirC[d];
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || (grid[i][j] !== old && !visited.has(i + '$' + j))) {
        grid[r][c] = color;
      } else {
        dfs(grid, i, j, old, color, visited)
      }
    }
  }
};