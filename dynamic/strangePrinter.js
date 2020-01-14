/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  if (s.length < 2) {
    return s.length;
  }

  const len = s.length,
    dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(0);
  }

  return helper(s, 0, len - 1);

  function helper(s, i, j) {
    if (i > j) {
      return 0;
    }

    if (dp[i][j] === 0) {
      let min = 1 + helper(s, i + 1, j);
      // 将 [i, j] 分成两段
      for (k = i + 1; k <= j; k++) {
        if (s[i] === s[k]) {
          min = Math.min(min, helper(s, i, k - 1) + helper(s, k + 1, j));
        }
      }
      dp[i][j] = min;
    }

    return dp[i][j];
  }
};

console.log(strangePrinter('aaabbb'));
