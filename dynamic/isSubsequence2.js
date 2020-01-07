/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sLen = s.length,
    tLen = t.length,
    dp = [];

  if (sLen > tLen) {
    return false;
  }

  for (let i = 0; i <= sLen; i++) {
    dp[i] = Array(tLen + 1).fill(0);
  }
  for (let i = 0; i <= tLen; i++) {
    dp[0][i] = true;
  }
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[sLen][tLen];
};

console.log(isSubsequence('abc', 'ahbgdc'));