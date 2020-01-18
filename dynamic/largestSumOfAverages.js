/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
  const len = A.length,
    dp = [];
  for (let i = 0; i <= len; i++) {
    dp[i] = Array(K + 1).fill(0);
  }

  const sum = Array(len + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    sum[i] = sum[i - 1] + A[i - 1];
    dp[i][1] = sum[i] / i;
  }

  for (let i = 1; i <= len; i++) {
    for (let k = 2; k <= K; k++) {
      for (let j = 0; j < i; j++) {
        dp[i][k] = Math.max(
          dp[i][k],
          dp[j][k - 1] + (sum[i] - sum[j]) / (i - j)
        );
      }
    }
  }

  return dp[len][K];
};

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3));
