/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  const m = A.length,
    n = B.length,
    dp = [];

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }

  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = 0;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = 0;
  }

  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return max;
};

console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]));
