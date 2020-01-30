/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  const len = A.length,
    dp = Array(len)
      .fill(0)
      .map(() => []);

  let max = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const diff = A[i] - A[j];
      if (dp[j][diff]) {
        dp[i][diff] = Math.max(dp[i][diff] || 2, dp[j][diff] + 1);
      } else {
        dp[i][diff] = 2;
      }
      max = Math.max(max, dp[i][diff]);
    }
  }

  return max;
};

console.log(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]));
