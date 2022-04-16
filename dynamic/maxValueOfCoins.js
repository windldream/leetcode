/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
  const n = piles.length;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      let sum = 0;

      // 从第i个栈中去m个硬币
      for (let m = 0; m <= j && m <= piles[i - 1].length; m++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - m] + sum);

        if (m < piles[i - 1].length) sum += piles[i - 1][m];
      }
    }
  }

  return dp[n][k];
};
