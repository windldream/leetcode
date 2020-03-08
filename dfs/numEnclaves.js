/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
  const m = A.length;
  const n = A[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const visited = {};
      if (A[i][j] === 1 && !dfs(A, i, j, visited)) {
        res += 1;
      }
    }
  }
  return res;

  function dfs(A, i, j, visited) {
    if (
      i < 0 ||
      j < 0 ||
      i >= A.length ||
      j >= A[0].length ||
      A[i][j] === 0 ||
      visited[i + '$' + j]
    ) {
      return false;
    }
    if (
      (i === 0 || j === 0 || i === A.length - 1 || j === A[0].length - 1) &&
      A[i][j] === 1
    ) {
      return true;
    }
    visited[i + '$' + j] = 1;
    return (
      dfs(A, i - 1, j, visited) ||
      dfs(A, i + 1, j, visited) ||
      dfs(A, i, j - 1, visited) ||
      dfs(A, i, j + 1, visited)
    );
  }
};
