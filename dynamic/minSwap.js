/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  const m = A.length,
    n = B.length,
    dp = [];
  if (m !== n || m === 0) {
    return 0;
  }

  for (let i = 0; i < 2; i++) {
    dp[i] = Array(m).fill(Infinity);
  }

  dp[0][0] = 0;
  dp[1][0] = 1;
  for (let i = 1; i < m; i++) {
    if (A[i] > A[i - 1] && B[i] > B[i - 1]) {
      dp[0][i] = Math.min(dp[0][i], dp[0][i - 1]);
      dp[1][i] = Math.min(dp[1][i], dp[1][i - 1] + 1);
    }
    if (A[i] > B[i - 1] && B[i] > A[i - 1]) {
      dp[0][i] = Math.min(dp[0][i], dp[1][i - 1]);
      dp[1][i] = Math.min(dp[1][i], dp[0][i - 1] + 1);
    }
  }

  return Math.min(dp[0][m - 1], dp[1][m - 1]);
};

console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7]));
