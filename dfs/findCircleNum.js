/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const r = M.length,
    c = M[0].length,
    visited = [];
  let count = 0;
  for (let i = 0; i < r; i++) {
    if (!visited[i]) {
      dfs(visited, i);
      count++;
    }
  }
  return count;

  function dfs(visited, i) {
    for (let j = 0; j < c; j++) {
      if (M[i][j] === 1 && !visited[j]) {
        visited[j] = 1;
        dfs(visited, j);
      }
    }
  }
};
