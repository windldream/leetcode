/**
 * @param {string} S
 * @return {number}
 */
var numPermsDISequence = function(S) {
  const M = 10 ** 9 + 7,
    len = S.length,
    dp = Array(len + 1)
      .fill(0)
      .map(() => Array(len + 1).fill(0));

  // dp[i][j] 由[0, i]范围内数字组成 并且最后一个数字是 j 的情况
  dp[0][0] = 1; // 0
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= i; j++) {
      if (S[i - 1] === 'D') {
        for (let k = j; k <= i - 1; k++) {
          dp[i][j] = (dp[i][j] + dp[i - 1][k]) % M;
        }
      } else {
        for (let k = 0; k < j; k++) {
          dp[i][j] = (dp[i][j] + dp[i - 1][k]) % M;
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i <= len; i++) {
    res = (res + dp[len][i]) % M;
  }
  return res;
};

console.log(numPermsDISequence('DID'));
