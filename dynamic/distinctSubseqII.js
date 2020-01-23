/**
 * @param {string} S
 * @return {number}
 */
var distinctSubseqII = function(S) {
  const len = S.length,
    dp = Array(len + 1).fill(0),
    last = {},
    M = 10 ** 9 + 7;

  dp[0] = 1;
  for (let i = 0; i < len; i++) {
    dp[i + 1] = (dp[i] * 2) % M;
    if (last[S[i]] !== undefined) {
      dp[i + 1] -= dp[last[S[i]]];
    }
    dp[i + 1] %= M;
    last[S[i]] = i;
  }

  dp[len]--;
  if (dp[len] < 0) {
    dp[len] = (dp[len] + M) % M;
  }

  return dp[len];
};

console.log(distinctSubseqII('aba'));
