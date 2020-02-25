/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const m = matrix.length,
    n = matrix[0].length,
    arr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push([matrix[i][j], i, j]);
    }
  }
  arr.sort((a, b) => a[0] - b[0]);

  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let [num, i, j] of arr) {
    dp[i][j] = 1;
    for (let [x, y] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]) {
      const r = i + x,
        c = j + y;
      if (r >= 0 && r < m && c >= 0 && c < n) {
        if (matrix[i][j] > matrix[r][c]) {
          dp[i][j] = Math.max(dp[i][j], dp[r][c] + 1);
        }
      }
    }
  }

  let max = -Infinity;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(dp[i][j], max);
    }
  }

  return max;
};
