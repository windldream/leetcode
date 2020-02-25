/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length,
    n = matrix[0].length;
  const pacific = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  const atlantic = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dfs(matrix, i, 0, pacific, matrix[i][0]);
    dfs(matrix, i, n - 1, atlantic, matrix[i][n - 1]);
  }

  for (let i = 0; i < n; i++) {
    dfs(matrix, 0, i, pacific, matrix[0][i]);
    dfs(matrix, m - 1, i, atlantic, matrix[m - 1][i]);
  }

  const res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;

  function dfs(matrix, x, y, visited, pre) {
    if (
      x < 0 ||
      y < 0 ||
      x >= matrix.length ||
      y >= matrix[0].length ||
      visited[x][y] ||
      matrix[x][y] < pre
    ) {
      return;
    }

    visited[x][y] = 1;
    dfs(matrix, x + 1, y, visited, matrix[x][y]);
    dfs(matrix, x - 1, y, visited, matrix[x][y]);
    dfs(matrix, x, y - 1, visited, matrix[x][y]);
    dfs(matrix, x, y + 1, visited, matrix[x][y]);
  }
};
