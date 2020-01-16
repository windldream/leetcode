/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
  const dp = [],
    M = 10 ** 9 + 7;

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for (let i = 4; i <= N; i++) {
    dp[i] = (((dp[i - 1] * 2) % M) + dp[i - 3]) % M;
  }

  return dp[N];
};
