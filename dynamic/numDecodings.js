/**
 * @param {string} s
 * @return {number}
 */
// 226 -> 2 26, 22 6, 226, 0
var numDecodings = function (s) {
  if (s.length === 0 || s[0] == 0) {
    return 0;
  }
  let len = s.length,
    dp = [];

  dp[0] = 1;
  dp[-1] = 1;
  for (let i = 1; i < len; i++) {
    if (s[i] == '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        dp[i] = dp[i - 2];
      } else {
        return 0;
      }
    } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= 1 && s[i] <= 6)) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[len - 1];
};

console.log(numDecodings('226'))