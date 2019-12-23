/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// f(m, n) = f(m - 1, n) + f(m, n - 1)
var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }

  let cache = [];
  for (let i = 0; i < m; i++) {
    cache[i + 1] = [];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1) {
        cache[i][j] = 1;
      } else {
        cache[i][j] = cache[i - 1][j] + cache[i][j - 1];
      }
    }
  }

  return cache[m][n]
};

console.log(uniquePaths(7, 3))