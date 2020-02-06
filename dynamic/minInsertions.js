/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  if (isPalindrome(s)) {
    return 0;
  }

  const len = s.length,
    dp = Array(len + 1)
      .fill(0)
      .map(() => Array(len + 1).fill(0)),
    reverse = s
      .split('')
      .reverse()
      .join('');

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      if (s[i - 1] === reverse[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return len - dp[len][len];

  function isPalindrome(s) {
    return (
      s
        .split('')
        .reverse()
        .join('') === s
    );
  }
};
