/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const len = s.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return s[0] === '*' ? 9 : s[0] === '0' ? 0 : 1;
  }

  const dp = [],
    M = 10 ** 9 + 7;
  dp[0] = 1;
  dp[-1] = 1;
  for (let i = 1; i <= len; i++) {
    if (s[i - 1] === '0') {
      if (s[i - 2] === '1' || s[i - 2] === '2') {
        dp[i] = dp[i - 2];
      } else if (s[i - 2] === '*') {
        dp[i] = (dp[i - 2] * 2) % M;
      } else {
        return 0;
      }
    } else if (s[i - 1] === '*') {
      if (s[i - 2] === '1') {
        dp[i] = (dp[i - 1] * 9 + dp[i - 2] * 9) % M;
      } else if (s[i - 2] === '2') {
        dp[i] = (dp[i - 1] * 9 + dp[i - 2] * 6) % M;
      } else if (s[i - 2] === '*') {
        dp[i] = (dp[i - 1] * 9 + dp[i - 2] * (9 + 6)) % M;
      } else {
        dp[i] = (dp[i - 1] * 9) % M;
      }
    } else if (s[i - 1] <= 6 && s[i - 2] === '*') {
      dp[i] = (dp[i - 1] + dp[i - 2] * 2) % M;
    } else if (s[i - 1] > 6 && s[i - 2] === '*') {
      dp[i] = (dp[i - 1] + dp[i - 2]) % M;
    } else if (
      s[i - 2] === '1' ||
      (s[i - 2] === '2' && s[i - 1] >= 1 && s[i - 1] <= 6)
    ) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % M;
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[len];
};

console.log(numDecodings('3*'));
